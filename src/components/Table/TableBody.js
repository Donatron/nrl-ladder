import React from 'react'

import './table.css'

const TableBody = ({ data, ladderType }) => {
  const renderTableData = (data) => {
    const tableData = []
    for (const [key, value] of Object.entries(data)) {
      if (key === 'logo') {
        tableData.push(<td><img src={value} style={{ width: '50px', height: 'auto' }} /></td>)
      } else {
        tableData.push(<td>{value}</td>)
      }
    }
    return tableData
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