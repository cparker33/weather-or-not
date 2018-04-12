/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import shortid from 'shortid' // eslint-disable-line no-unused-vars
import TransitionGroup from 'react-addons-transition-group'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

import { clearWeatherData } from '../../api/app'

/*********************************
  COMPONENTS
*********************************/
import DayContainer from '../today/DayContainer'
import WeekContainer from '../weekday/WeekContainer' // eslint-disable-line no-unused-vars

/*********************************
  TEMP
*********************************/
class MainView extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      has_data: false
    }
  }

  handleBackClick = (()=> {
    clearWeatherData()
  })

  render() {
    const _props = this.props
    const app_state = _props.sys_state.app_state
    const weather_data = app_state.weather_data
    log('weather_data-> ', weather_data)

    return (

      <div className='main-view-container'>
        <div className='app-back-btn' onClick={this.handleBackClick}>
          <i className='fa fa-arrow-circle-left' />
        </div>
        <TransitionGroup>
          <DayContainer city={weather_data.city}  today_item={weather_data.today_obj} />
        </TransitionGroup>

        <section className='main-view-day-wrapper' />
        {/* key={shortid.generate()}  */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

MainView.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(MainView)