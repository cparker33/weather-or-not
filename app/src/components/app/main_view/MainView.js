/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import TransitionGroup from 'react-transition-group/TransitionGroup'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  LOCAL API
*********************************/
import { clearWeatherData } from '../../../api/app'

/*********************************
  COMPONENTS
*********************************/
import DayContainer from '../today/DayContainer'
import WeekContainer from '../weekday/WeekContainer' // eslint-disable-line no-unused-vars

/*********************************
  MAIN VIEW
*********************************/
class MainView extends Component {

  static defaultProps = {
    sys_state:  PropTypes.object
  }
  
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
    // log('weather_data-> ', weather_data)

    return (

      <div className='main-view-container'>

        <div className='app-back-btn' onClick={this.handleBackClick}>
          <i className='fa fa-arrow-circle-left' />
        </div>
        
        <TransitionGroup>
          {
            (()=> {
              if (_props.has_data) {
                return (
                  <DayContainer city={weather_data.city}  today_item={weather_data.today_obj} />
                )
              }
            })()
          }
        </TransitionGroup>

        <div className='main-view-day-wrapper'>
          {
            weather_data.forecast_days.map((day_items)=> {
              return (
                <WeekContainer day_items={day_items} key={shortid.generate()} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

export default connect(mapStateToProps)(MainView)