import React from 'react'
import { useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import './ladderType.css'

const LadderType = ({ setLadderType }) => {
  const { round } = useSelector(state => state.ladder)
  return (
    <Row className="mt-5">
      <Col
        xs={{ span: 8, offset: 2 }}
        lg={{ offset: 3 }}
        className="mb-5 ladder-instructions"
      >
        <p>Can't figure out how well your team is doing with all the bye points added in?</p>
        <p>The NRL Ladder Adjuster lets you update the ladder to give a truer representation of how each team is doing.</p>
        <p>Choose between the official ladder, a ladder where points for byes have been removed, or a ladder based on percentage of games played and won.</p>
      </Col>
      <Col
        xs={{ span: 4, offset: 2 }}
        lg={{ span: 2, offset: 3 }}
      >
        <Form.Select
          aria-label="Select ladder type"
          onChange={(e) => setLadderType(e.target.value)}
        >
          <option>Ladder type</option>
          <option value="standard">Official NRL Ladder</option>
          <option value="no-byes">No Points for Byes</option>
          <option value="win-percentage">Win Percentage</option>
        </Form.Select>
      </Col>
      <Col
        xs={{ span: 6, offset: 2 }}
        lg={{ span: 4, offset: 0 }}
        className="mt-3 mt-lg-0"
      >
        <h3>{round}</h3>
      </Col>
    </Row>
  )
}

export default LadderType