import React from 'react'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'

import './table.css'

const TableBody = ({ data, ladderType }) => {
  const renderTableData = (data) => {
    const tableData = []
    for (const [key, value] of Object.entries(data)) {
      if (key === 'logo') {
        tableData.push(<td><img src={value}/></td>)
      } else {
        tableData.push(<td>{value}</td>)
      }
    }
    return tableData
  }

  const renderPosition = (position, officialPosition) => {
    if ((position + 1) === parseInt(officialPosition)) return <td>{position + 1}</td>
    if ((position + 1) < parseInt(officialPosition)) return <td><ChevronUp className="position-up" />{position + 1}</td>
    if ((position + 1) > parseInt(officialPosition)) return <td><ChevronDown className="position-down" />{position + 1}</td>
  } 

  return (
    <tbody>
      {data.map((d, idx) => {
        return (
          <tr key={d.teamName}>
            { ladderType === 'standard' ? null : renderPosition(idx, d.ladderPosition) }
            {renderTableData(d)}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody