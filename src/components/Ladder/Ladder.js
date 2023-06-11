import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import TableBody from '../Table/TableBody'
import TableHead from '../Table/TableHead'

import { getTableHeaders } from '../../utils/ladderUtil'

const Ladder = ({ ladderType }) => {
  const { officialLadder, noByePoints, percentageWins } = useSelector(state => state.ladder)
  const [headers, setHeaders] = useState([])
  const [ladderData, setLadderData] = useState(officialLadder)
  

  useEffect(() => {
    const tableHeaders = getTableHeaders(ladderType)
    setHeaders(tableHeaders)
    if (ladderType === 'no-byes') setLadderData(noByePoints)
    if (ladderType === 'standard')setLadderData(officialLadder)
    if (ladderType === 'win-percentage') setLadderData(percentageWins)
  }, [ladderType])

  const renderTable = () => {
    return (
      <Table>
        <TableHead headers={headers} />
        <TableBody data={ladderData} ladderType={ladderType}/>
      </Table>
    )
  }

  return (
    <Row className="my-5">
      <Col xs={{ span: 8, offset: 2 }} lg={{ offset: 3 }}>
        {ladderData.length && renderTable()}
      </Col>
    </Row>
  )
}

export default Ladder
