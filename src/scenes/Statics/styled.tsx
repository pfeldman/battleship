import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  position: relative;
  left: 5%;
  background-color: white;
  border-radius: 20px;
  padding: 10px 30px;
  margin-top: 20px;
  box-sizing: border-box;
  
  h1 {
    display: flex;
    justify-content: space-between;
  }
`

export const Table = styled.table`
  width: 100%;
  
  td {
    text-align: center;
  }
  
  thead tr {
    font-weight: bold;
    background-color: #86d8ff;
  }
  
  tbody tr {
    &:nth-child(odd) {
      background-color: #e0ffff;
    }
    
    &:nth-child(even) {
      background-color: #c3dbff;
    }
  }
`
