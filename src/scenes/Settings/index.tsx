import React, { useRef } from 'react'
import { ButtonContainer, Input, Wrapper } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { getOriginalTurns } from 'store/configuration/turns/selectors'
import { defineTurns } from 'store/configuration/turns/action'

const Settings: React.FC = () => {
  const input = useRef(null)
  const dispatch = useDispatch()
  const turns = useSelector(getOriginalTurns)

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const turnsValue = parseInt(e.target.value)
    const turns = isNaN(turnsValue) ? 50 : turnsValue

    dispatch(defineTurns(turns))
  }

  const setTurns = (turns: number) => {
    const turnsInput = input.current || {value: 0}
    turnsInput.value = turns
    handleValueChange({
      // @ts-ignore
      target: turnsInput
    })
  }

  return (
    <>
      <h1>Settings</h1>
      <Wrapper>
        <Input defaultValue={turns} type='number' max={101} onChange={handleValueChange} ref={input} />
      </Wrapper>
      <ButtonContainer>
        <button
          className={turns > 75 ? 'active' : ''}
          onClick={() => setTurns(101)}
        >
          EASY
        </button>
        <button
          className={turns > 50 && turns <= 75 ? 'active' : ''}
          onClick={() => setTurns(75)}
        >
          MEDIUM
        </button>
        <button
          className={turns <= 50 ? 'active' : ''}
          onClick={() => setTurns(50)}
        >
          HARD
        </button>
      </ButtonContainer>
    </>
  )
}

export default Settings
