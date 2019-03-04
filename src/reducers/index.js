import {combineReducers} from 'redux'

import passwordShowing from './passwordShowing'
import userName from './userName'
import isPregnant from './isPregnant'
import hasChildren from './hasChildren'
import hasMidwife from './hasMidwife'
import linkDropdown from './linkDropdown'
import knowDueDate from './knowDueDate'
import dueDate from './dueDate'
import children from './children'
import pointsTotal from './pointsTotal'
import deleteChildren from './deleteChildren'
import landingCarousel from './landingCarousel'
import userRewardIds from './userRewardIds'
import navToggle from './navToggle'
import knowLmp from './knowLmp'
import sectionIndex from './sectionIndex'
import rewardsActiveTab from './rewardsActiveTab'
import challengeResult from './challengeResult'

const reducers = combineReducers({
  userName,
  isPregnant,
  hasChildren,
  hasMidwife,
  passwordShowing,
  linkDropdown,
  knowDueDate,
  dueDate,
  children,
  deleteChildren,
  landingCarousel,
  pointsTotal,
  userRewardIds,
  navToggle,
  knowLmp,
  sectionIndex,
  rewardsActiveTab,
  challengeResult
})

export default reducers
