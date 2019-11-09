import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

export const Wrapper = styled.div`
  background-color: white;
  width: 70%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  padding: 20px 40px;
  
  h2 {
    border-bottom: 1px solid #AAA;
    padding-bottom: 10px;
  }
  
  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    
    button {
      background-color: #00b3b3;
      text-transform: uppercase;
      border: 1px solid #004c4c;
      padding: 8px 20px;
      cursor: pointer;
      color: white;
      font-weight: bold;
    }
  }
`
