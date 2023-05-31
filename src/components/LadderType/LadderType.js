import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const LadderType = ({ setLadderType }) => {
  return (
    <Row className="mt-5">
      <Col xs={{ span: 2, offset: 2 }}>
        <Form.Select
          aria-label="Select ladder type"
          onChange={(e) => setLadderType(e.target.value)}
        >
          <option>Ladder type</option>
          <option value="standard">Normal NRL Ladder</option>
          <option value="no-byes">No Points for Byes</option>
          <option value="win-percentage">Win Percentage</option>
        </Form.Select>
      </Col>
    </Row>
  )
}

export default LadderType