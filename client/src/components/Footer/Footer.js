import React from 'react'
import Col from 'react-bootstrap/Col'

import './footer.css'

const Footer = () => {
  return (
    <Col className="footer py-3">
      <p className="mb-0">&copy; Don Macarthur {new Date().getFullYear()}</p>
    </Col>
  )
}

export default Footer