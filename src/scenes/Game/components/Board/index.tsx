import React from 'react'
import { useSelector } from 'react-redux'
import { getBoardConfiguration } from 'store/configuration/board/selectors'

const Board: React.FC = () => {
  // here goes the board
  const boardConfiguration = useSelector(getBoardConfiguration)
  console.log(boardConfiguration)
  return null
}

export default Board
