import React from 'react'

import './table.css'

const TableBody = ({ data, ladderType }) => {
  const renderTableData = (data) => {
    return Object.values(data).map((value) => <td>{value}</td>)
  }

  return (
    <tbody>
      {data.map((d, idx) => {
        return (
          <tr key={d.teamName}>
            { ladderType === 'standard' ? null : (<td>{idx + 1}</td>) }
            {renderTableData(d)}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody