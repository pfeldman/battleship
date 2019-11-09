import React from 'react'
import { Overlay, Wrapper } from './styled'

interface IModal {
  title: string,
  content: string,
  action: () => void
}

const Modal: React.FC<IModal> = ({ title, content, action }) => {
  return (
    <Overlay>
      <Wrapper>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
          <button onClick={action}>Play Again</button>
        </div>
      </Wrapper>
    </Overlay>
  )
}

export default Modal
