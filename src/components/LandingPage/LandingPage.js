import React, { Component } from 'react'
import { connect } from 'react-redux'

import './landingPage.css'


class LandingPage extends Component {
  render () {
    return (
      <div >
        hello
      </div>
    )
  }
}

export default connect(state => state)(LandingPage)
