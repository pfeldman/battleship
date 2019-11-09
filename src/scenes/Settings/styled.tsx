import styled from 'styled-components'

export const Input = styled.input`
  font-size: 30px;
  text-align: center;
  width: 80px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  left: 10%;
  position: relative;
  margin-top: 50px;
    
  button {
    flex-grow: 1;
    height: 50px;
    
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
    
    &.active {
      background-color: #BBB;
    }
  }
`
