export interface IShipCell {
  hit: boolean,
  ship: null | Ship,
  number: number
}

export default class Ship {
  size: number
  hits: number

  constructor(size: number) {
    this.size = size
    this.hits = 0
  }

  hit = () => {
    this.hits = this.hits + 1
  }

  place = (board: IShipCell[][], name: number) => {
    let isVertical: boolean = false
    let horizontalLimit: number
    let verticalLimit: number
    let vertical: number = 0
    let horizontal: number = 0

    let placed = false

    while(!placed) {
      placed = true

      isVertical = !!Math.round(Math.random())

      if (isVertical) {
        horizontalLimit = board[0].length - 1
        verticalLimit = board.length - this.size - 1
      } else {
        horizontalLimit = board[0].length - this.size - 1
        verticalLimit = board.length - 1
      }

      horizontal = Math.floor(Math.random() * horizontalLimit)
      vertical = Math.floor(Math.random() * verticalLimit)

      if (isVertical) {
        for (let i = 0; i < this.size; i++) {
          if ((board[vertical + i][horizontal].ship)
            || (horizontal > 0 && board[vertical + i][horizontal - 1].ship)
            || (horizontal < horizontalLimit && board[vertical + i][horizontal + 1].ship)
            || (vertical < board.length && board[vertical + i + 1][horizontal].ship)
            || (vertical > 0 && board[vertical + i - 1][horizontal].ship)
          ) {
            placed = false
          }
        }
      } else {
        for (let i = 0; i < this.size; i++) {
          if (board[vertical][horizontal + i].ship
            || (vertical < board.length - 1 && board[vertical + 1][horizontal + i].ship)
            || (vertical > 0 && board[vertical - 1][horizontal + i].ship)
            || (horizontal < board[0].length && board[vertical][horizontal + i + 1].ship)
            || (horizontal > 0 && board[vertical][horizontal + i - 1].ship)
          ) {
            placed = false
          }
        }
      }
    }

    if (isVertical) {
      for (let i = 0; i < this.size; i++) {
        board[vertical + i][horizontal] = {
          hit: false,
          ship: this,
          number: name
        }
      }
    } else {
      for (let i = 0; i < this.size; i++) {
        board[vertical][horizontal + i] = {
          hit: false,
          ship: this,
          number: name
        }
      }
    }
  }
}
