import styled from 'styled-components'

export const Wrapper = styled.div`
  box-shadow: 0 0 6px 0 white;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);;
  }
`
