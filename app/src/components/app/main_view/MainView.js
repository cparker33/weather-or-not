/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import shortid from 'shortid'

import TransitionGroup from 'react-addons-transition-group'

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
import DayContainer from '../today/DayContainer'
import WeekContainer from '../weekday/WeekContainer'

/*********************************
  LOCAL STYLE
*********************************/

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

  componentDidMount() {
    // ...
  }

  render() {
    const _state = this.state
    const _props = this.props
    const app_state = _props.sys_state.app_state
    const weather_data = app_state.weather_data
    const has_data = weather_data.has_data

    log('weather_data-> ', weather_data)

    return (

      <div className='main-view-container'>


        <DayContainer city={weather_data.city}  today_item={weather_data.today_obj} />

        <section className='main-view-day-wrapper'>
          
        </section>
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