import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  justify-content: center;
`
export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: rgba(200, 200, 200, 0.5);
`

export const EmptyCell = styled.div`
  width: 50px;
  height: 50px;
`

interface ITurns {
  turns: number
}

export const Turns = styled.span`
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  display: block;
  text-align: center;
  font-size: 50px;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  ${(p: ITurns) => p.turns <= 10 ? `
    animation: blinker 0.5s linear infinite;
    color: red;
  `: ''}
`
