import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

import './loading.css'

const Loading = () => {
  return (
    <Row className="loading">
      <Col className='text-center'>
        <Spinner />
        <br />
        <span>One moment while we fetch the official ladder</span>
      </Col>
    </Row>
  )
}

export default Loading