import React from 'react'

import './table.css'

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((d) => {
        return (
          <tr key={d.teamName}>
            <td>{d.ladderPosition}</td>
            <td>{d.teamName}</td>
            <td>{d.gamesPlayed}</td>
            <td>{d.points}</td>
            <td>{d.wins}</td>
            <td>{d.draws}</td>
            <td>{d.losses}</td>
            <td>{d.byes}</td>
            <td>{d.pointsFor}</td>
            <td>{d.pointsAgainst}</td>
            <td>{d.pointsDiff}</td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody