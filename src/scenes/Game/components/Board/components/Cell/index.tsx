import React from 'react'
import { Wrapper } from './styled'

interface ICell {
  onClick: (row: number, column: number) => void,
  row: number,
  column: number,
  missed: boolean,
  sunken: boolean,
  hit: boolean
}

const Cell: React.FC<ICell> = ({ onClick, row, column, missed, sunken, hit }) => {
  const handleClick = () => {
    onClick(row, column)
  }

  return (
    <Wrapper onClick={handleClick} missed={missed} sunken={sunken} hit={hit} />
  )
}

export default Cell
