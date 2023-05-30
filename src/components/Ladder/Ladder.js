import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import TableBody from '../Table/TableBody'
import TableHead from '../Table/TableHead'

import { getTableHeaders } from '../../utils/ladderUtil'

const Ladder = ({ ladderType }) => {
  const { rawLadder, noPointsForByes } = useSelector(state => state.nrl)
  const [headers, setHeaders] = useState([])
  const [ladderData, setLadderData] = useState(rawLadder)
  

  useEffect(() => {
    const tableHeaders = getTableHeaders(ladderType)
    setHeaders(tableHeaders)
    if (ladderType === 'no-byes') {
      setLadderData(noPointsForByes)
    }
    if (ladderType === 'standard') {
      setLadderData(rawLadder)
    }
  }, [ladderType])

  const renderTable = () => {
    return (
      <Table>
        <TableHead headers={headers} />
        {/* <TableBody data={rawLadder} /> */}
        <TableBody data={ladderData} ladderType={ladderType}/>
      </Table>
    )
  }

  return (
    <Row className="my-5">
      <Col sm={{ span: 8, offset: 2 }}>
        {rawLadder.length && renderTable()}
      </Col>
    </Row>
  )
}

export default Ladder
