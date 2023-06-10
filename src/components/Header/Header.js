import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './header.css'

const Header = () => {
  return (
    <Row>
      <Col className="header px-3 py-1">
        <img
          src="https://www.nrl.com/.theme/nrl/badge.svg?bust=202305190357"
          alt="nrl"
          className="logo"
        />
       <span className="subtitle">NRL Ladder Adjuster</span>
      </Col>
    </Row>
  )
}

export default Header