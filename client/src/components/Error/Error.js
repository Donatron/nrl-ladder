import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './error.css'

const Error = ({ message }) => {
  return (
    <Row>
      <Col className="text-center error">
        <h3>Something Went Wrong!</h3>
        <p>It looks like we're having trouble at the moment.</p>
        <p>Refresh your browser to try again.</p><br />
        <span>Error Message: {message}</span>
      </Col>
    </Row>
  )
}

export default Error