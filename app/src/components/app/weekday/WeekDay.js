/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  LOCAL API
*********************************/

/*********************************
  COMPONENTS
*********************************/

/*********************************
  LOCAL STYLE
*********************************/

/*********************************
  TEMP
*********************************/
class WeekDay extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='week-day-container' />
        
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

WeekDay.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(WeekDay)