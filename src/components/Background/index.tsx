import React  from 'react'
import Wrapper from './styled'

interface IBackground {
  children: React.ReactNode | React.ReactNode[],
  className: string
}

const Background: React.FC<IBackground> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export default Background
