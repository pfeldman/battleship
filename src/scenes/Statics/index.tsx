import React from 'react'
import { Wrapper, Table } from './styled'
import moment from 'moment'

interface IStat {
  status: boolean,
  accuracy: number,
  turns: number,
  start: Date,
  end: Date
}

const Statics: React.FC = () => {
  const stats = localStorage.getItem('statics')

  if (!stats) {
    return (
      <Wrapper>
        <h1>Statics</h1>
        <p>No games played yet on this session. Please play some to see some statics</p>
      </Wrapper>
    )
  }

  const statics: IStat[] = JSON.parse(stats)

  const victories = statics.filter(stat => stat.status)

  return (
    <Wrapper>
      <h1>
        <span>Statics</span>
        <span>Victories: {victories.length} / {statics.length} ({Math.round(victories.length / statics.length * 100)}%)</span>
      </h1>
      <Table>
        <thead>
          <tr>
            <td>Status</td>
            <td>Overall Accuracy</td>
            <td>Turns Used</td>
            <td>Start Time</td>
            <td>End Time</td>
          </tr>
        </thead>
        <tbody>
          {statics.map((stat, index) => {
            return (
              <tr key={index}>
                <td>{stat.status ? 'WON' : 'LOST'}</td>
                <td>{`${stat.accuracy}%`}</td>
                <td>{`${stat.turns} turns`}</td>
                <td>{moment(stat.start).format('MM/DD/YYYY hh:mm a')}</td>
                <td>{moment(stat.end).format('MM/DD/YYYY hh:mm a')}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default Statics
