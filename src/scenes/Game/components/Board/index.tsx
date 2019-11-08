import React from 'react'
import { useSelector } from 'react-redux'
import { getBoardConfiguration } from 'store/configuration/board/selectors'
import { Row } from './styled'
import Cell from './components/Cell'

const Board: React.FC = () => {
  const boardConfiguration = useSelector(getBoardConfiguration)
  console.log(boardConfiguration)
  return (
    <>
      {new Array(boardConfiguration.rows).fill(0).map((row, rowIndex) => (
      <Row key={rowIndex}>
        {new Array(boardConfiguration.columns).fill(0).map((column, columnIndex) => (
          <Cell key={columnIndex} />
        ))}
      </Row>
    ))}
    </>
  )
}

export default Board
