import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Input
} from 'reactstrap'
import RewardPreview from './RewardPreview'
import PointsAvailable from '../PointsAvailable'
import Partners from '../Partners'

import rewards from './data.js'
import './rewards.css'

class Rewards extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      searchString: '',
      brandFilter: '',
      categoryFilter: ''
    }
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render () {
    let rewardsToDisplay = rewards.filter(reward => {
      const rewardString = (reward.description +
        ' ' + reward.brand +
        ' ' + reward.title +
        ' ' + reward.description +
        ' ' + reward.points).toLowerCase()
      return (
        rewardString.indexOf(this.state.searchString.toLowerCase()) !== -1
      )
    }
    )
    rewardsToDisplay = rewardsToDisplay.filter(reward => {
      const brand = reward.brand.toLowerCase()
      return brand.indexOf(this.state.brandFilter.toLowerCase()) !== -1
    })
    rewardsToDisplay = rewardsToDisplay.filter(reward => {
      const category = reward.category.toLowerCase()
      return category.indexOf(this.state.categoryFilter.toLowerCase()) !== -1
    })

    return (
      <div>
        <PointsAvailable />
        <Input className='searchInput'
          onChange={this.handleChange}
          type='text' name='searchString'
          id='searchString'
          placeholder='Type to search'
        />
        <Input
          className='searchDropdownInput'
          onChange={this.handleChange}
          type='select'
          name='categoryFilter'
          id='categoryFilter'>
          <option value=''>Categories</option>
          <option value='mobile'>Mobile</option>
          <option value='food'>Food</option>
          <option value='fuel'>Fuel</option>
        </Input>
        <Input
          className='searchDropdownInput'
          onChange={this.handleChange}
          type='select'
          name='brandFilter'
          id='brandFilter'>
          <option value=''>Brands</option>
          <option value='vodafone'>Vodafone</option>
          <option value='spark'>Spark</option>
          <option value='gasoline alley'>Gasoline Alley</option>
          <option value='four square'>Four Square</option>
        </Input>
        <div className='rewardCount'>
          Showing {rewardsToDisplay.length} of {rewards.length} rewards
        </div>
        {rewardsToDisplay.map((reward, key) => {
          const isAvailable = this.props.pointsTotal >= reward.points
          return (
            <RewardPreview reward={reward} isAvailable={isAvailable} key={key} />
          )
        })}
        <Partners />
      </div>
    )
  }
}

export default connect(state => state)(Rewards)
