import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Container, Col, Row, CardTitle, CardText } from 'reactstrap'
import trophy from '../../img/resultsTrophy.svg'

import './points.css'

class Points extends Component {
  render () {
    const { pointsTotal } = this.props

    return (
      <Container>
        <Link to='/rewards'>
          <Card className='home-points'>
            <Row className='home-points-row'>
              <Col className='home-points-text' xs='9'>
                <CardTitle className='home-points-total'>You have {pointsTotal} points</CardTitle>
                <CardText className='home-points-check'>Check out your rewards</CardText>
              </Col>
              <Col xs='3'>
                <img src={trophy} alt='' id='trophy-img' className='home-points-img' />
              </Col>
            </Row>
          </Card>
        </Link>
      </Container>
    )
  }
}

export default connect(state => state)(Points)
