import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBoardConfiguration } from 'store/configuration/board/selectors'
import { getTurns, getOriginalTurns } from 'store/configuration/turns/selectors'
import Modal from 'components/Modal'
import { Row, Details, EmptyCell, Turns } from './styled'
import Cell from './components/Cell'
import Ship, { IShipCell }  from './Ship'
import { takeOutTurn, resetTurns } from 'store/configuration/turns/action'
import { withRouter } from 'react-router-dom'

interface IBoard {
  location: any
}

const Board: React.FC<IBoard> = ({ location }) => {
  const [board, setBoard] = useState<IShipCell[][]>([])
  const [lose, setLose] = useState(false)
  const [won, setWon] = useState(false)
  const [allShips, setShips] = useState<Ship[]>([])
  const [originalTurns, setOriginalTurns] = useState(0)
  const [date, setDate] = useState<Date>(new Date())
  const dispatch = useDispatch()
  const boardConfiguration = useSelector(getBoardConfiguration)
  const turns = useSelector(getTurns)
  const oTurns = useSelector(getOriginalTurns)

  const tempBoard: IShipCell[][] = []
  const ships: Ship[] = []

  let totalHits = 0
  let totalSize = 0

  allShips.forEach((ship) => {
    totalHits += ship.hits
    totalSize += ship.size
  })

  if (totalSize > 0 && totalHits === totalSize) {
    const usedTurns = originalTurns - turns
    const statics = JSON.parse((localStorage.getItem('statics') || '[]'))
    statics.push({
      status: true,
      turns: usedTurns,
      accuracy: 100,
      start: date,
      end: new Date()
    })
    localStorage.setItem('statics', JSON.stringify(statics))
    setWon(true)
  }

  const renderShips = () => {
    const row: IShipCell[] = []

    const model = {
      number: 0,
      hit: false,
      ship: null
    }

    for (let i = 0; i < boardConfiguration.columns; i++) {
      row.push({
        ...model
      })
    }

    for (let i = 0; i < boardConfiguration.rows; i++) {
      const newRow = JSON.parse(JSON.stringify(row))
      tempBoard.push([...newRow])
    }

    ships.push(new Ship(4))
    ships.push(new Ship(3))
    ships.push(new Ship(3))
    ships.push(new Ship(2))
    ships.push(new Ship(2))
    ships.push(new Ship(2))
    ships.push(new Ship(1))
    ships.push(new Ship(1))
    ships.push(new Ship(1))
    ships.push(new Ship(1))

    ships.forEach((ship, index) => {
      ship.place(tempBoard, index + 1)
    })

    setShips(ships)

    setBoard(tempBoard)
  }

  useEffect(() => {
    renderShips()
    dispatch(resetTurns(oTurns))
    // eslint-disable-next-line
  }, [location.pathname])

  useEffect(() => {
    if (turns === 0) {
      const statics = JSON.parse((localStorage.getItem('statics') || '[]'))
      statics.push({
        status: false,
        turns: originalTurns,
        accuracy: totalHits / totalSize * 100,
        start: date,
        end: new Date()
      })

      localStorage.setItem('statics', JSON.stringify(statics))
      setLose(true)
    }

    if (!originalTurns) {
      setOriginalTurns(turns)
      setDate(new Date())
    }
    // eslint-disable-next-line
  }, [originalTurns, turns])

  const handleClick = (row: number, column: number) => {
    const clicked = board[row][column]

    if (!clicked.ship && !board[row][column].hit) {
      board[row][column].hit = true
      dispatch(takeOutTurn())
    } else if (!clicked.hit && !board[row][column].hit) {
      dispatch(takeOutTurn())
      board[row][column].hit = true
      const ship = board[row][column].ship || { hit: () => null }
      ship.hit()
    }
  }

  if (!board.length) return null

  const restartGame = () => {
    dispatch(resetTurns(originalTurns))
    setWon(false)
    setLose(false)
    setShips([])
    renderShips()
  }

  return (
    <>
      {won || lose ? (
        <Modal
          title={won ? 'You Won!' : 'You Lose'}
          content={won ? `You have won on ${originalTurns - turns} turns` : `You had an accuracy of ${(totalHits / totalSize * 100).toFixed(2)}%`}
          action={restartGame}
        />
      ) : null}
      <Turns turns={turns}>{turns}</Turns>
      <Row>
        <EmptyCell />
        {new Array(boardConfiguration.columns).fill(0).map((column, columnIndex) => (
          <Details key={columnIndex}>{(columnIndex + 1).toString()}</Details>
        ))}
      </Row>
      {new Array(boardConfiguration.rows).fill(0).map((row, rowIndex) => (
        <Row key={rowIndex}>
          <Details>{String.fromCharCode(65 + rowIndex)}</Details>
          {new Array(boardConfiguration.columns).fill(0).map((column, columnIndex) => {
            const ship = board[rowIndex][columnIndex].ship || { hits: 0, size: 1000 }
            return (
              <Cell
                key={columnIndex}
                row={rowIndex}
                column={columnIndex}
                onClick={handleClick}
                missed={board[rowIndex][columnIndex].hit && !board[rowIndex][columnIndex].ship}
                sunken={ship.hits >= ship.size}
                hit={!!(board[rowIndex][columnIndex].hit && board[rowIndex][columnIndex].ship)}
              />
            )
          })}
        </Row>
      )
    )}
    </>
  )
}

export default withRouter(Board)
