import styled from 'styled-components'

interface IWrapper {
  missed: boolean,
  sunken: boolean,
  hit: boolean
}

function getColor (props: IWrapper, hover: boolean = false) {
  if (props.sunken) {
    return 'rgba(0, 0, 0, 0.5)'
  }

  if (props.hit) {
    return 'rgba(255, 0, 0, 0.5)'
  }

  if (props.missed) {
    return 'transparent'
  }

  return `rgba(255, 255, 255, ${hover ? '0.9' : '0.5'})`
}

export const Wrapper = styled.div`
  box-shadow: 0 0 6px 0 white;
  width: 50px;
  height: 50px;
  background-color: ${(p: IWrapper)  => getColor(p)};
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  
  &:hover {
    background-color: ${(p: IWrapper)  => getColor(p, true)};
  }
`
