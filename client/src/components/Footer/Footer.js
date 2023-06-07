import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './footer.css'

const Footer = () => {
  return (
    <Col className="footer py-3">
      <Row>
        <Col xs={{ span: 8, offset: 2 }} md={{ span: 12, offset: 0 }}>
          <span>This site is in no way affiliated with the official <a href="https://www.nrl.com/" target="__blank">NRL site</a>.</span><br />
          <span>I'm just one of many fans trying to figure out how well my team is actually doing</span>
          <span>when points for byes are skewing the ladder result.</span>
          <p className="mb-0 mt-3">&copy; <a href="https://www.dmwebdev.com.au/">Don Macarthur</a> {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Col>
  )
}

export default Footer