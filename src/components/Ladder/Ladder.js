import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import TableBody from '../Table/TableBody'
import TableHead from '../Table/TableHead'

const Ladder = () => {
  const { rawLadder } = useSelector(state => state.nrl)

  useEffect(() => {
    console.log('using effect')
  }, [])

  const headers = [
    'Position',
    'Team',
    'Played',
    'Points',
    'Wins',
    'Drawn',
    'Lost',
    'Byes',
    'For',
    'Against',
    'Diff.'
  ]

  const renderTable = () => {
    return (
      <Table>
        <TableHead headers={headers} />
        <TableBody data={rawLadder} />
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
