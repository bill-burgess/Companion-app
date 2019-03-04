import React, { Component } from 'react'
import {
  Container,
  Card,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'

import NavBar from '../../NavBar'
import '../sectionPage.css'
import yourPregnancyArticles from './yourPregnancyArticles'
import yourPregnancyImg from '../../../img/SectionPages/yourPregnancy.png'
import angleCalendar from '../../../img/angle/angle.png'
import angleLink from '../../../img/darkAngle/angle@2x.png'
import Footer from '../../Footer'

class YourPregnancy extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <img className='bannerImg' src={yourPregnancyImg} alt='' />
        <Container>
          <h4 className='sectionPageTitle'>Your pregnancy</h4>
          <p className='sectionPageContent'>This is where you can learn all about your pregnancy. Have a browse
            through the sections below and don’t forget to unlock challenges for
            rewards.</p>
          <Link to='/calendar'><Card className='myCalendarCard'>
            <Row>
              <Col xs='10'>
                <CardTitle className='myCalendarTitle'>My Calendar</CardTitle>
                <CardText className='myCalendarText'>See your appointents and tips</CardText>
              </Col>
              <Col xs='2'>
                <img className='angleCalendar' src={angleCalendar} alt='' />
              </Col>
            </Row>
          </Card></Link>
          {
            yourPregnancyArticles.map((article, key) => {
              const { title, description } = article
              return (
                <Link key={key} to={`/your-pregnancy/${article.id}`}><Card key={key} className='linkCard'>
                  <Row>
                    <Col xs='10'>
                      <CardTitle className='linkTitle'>{title}</CardTitle>
                      <CardText className='linkText'>{description}</CardText>
                    </Col>
                    <Col xs='2'>
                      <img className='angleLink' src={angleLink} alt='' />
                    </Col>
                  </Row>
                </Card></Link>
              )
            })
          }
          <hr className='hr' />
          <h4 className='readMore'>Read more</h4>
          <ul className='addMargin'>
            <li className='li'>
              Getting ready for baby
            </li>
            <li className='li'>
              Sex during pregnancy
            </li>
            <li className='li'>
              Danger signs
            </li>
            <li className='li'>
              Labour & birth
            </li>
          </ul>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default YourPregnancy
