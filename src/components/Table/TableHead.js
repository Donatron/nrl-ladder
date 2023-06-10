import React from 'react'

import './table.css'

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => {
          return <td key={header}>{header}</td>
        })}
      </tr>
    </thead>
  )
}

export default TableHead