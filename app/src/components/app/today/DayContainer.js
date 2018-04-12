/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { TweenMax, Power4 } from 'gsap'
import moment from 'moment'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  COMPONENTS
*********************************/
import Weather from './components/Weather'
import CityInfo from './components/CityInfo'
import TempWind from './components/TempWind'

/*********************************
  TEMP
*********************************/
class DayContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  componentDidMount(callback) {
    let time_color = this.setTimeColor()
    const el = this.container
    TweenMax.fromTo(el, 1, {
      y: 300, 
      opacity: 0, 
      backgroundColor: 'none'
    }, 
    {
      y: 0, 
      opacity: 1, 
      backgroundColor: time_color, 
      onComplete: callback,
      ease: Power4.easeOut
    })
  }

  componentWillUnmount(callback) {
    const el = this.container
    TweenMax.fromTo(el, 0.5, 
      {
        height: 200, 
        opacity: 1
      }, 
      {
        height: 10, 
        opacity: 0, 
        onComplete: callback,
        ease: Power4.easeIn
      })
  }

  setTimeColor = (()=> {
    let time_color
    let hour = moment().format('HH')
    hour = Number(hour)
    if (hour < 8) {
      time_color = '#f9c10f'
    }
    if (hour > 8 && hour < 5) {
      time_color = '#639fb6'
    }
    if (hour > 5) {
      time_color = '#4B8296'
    }
    return time_color
  })

  render() {
    const _props = this.props
    const today_item = _props.today_item
    return (
      <div className='day-container' ref={(cont)=> {this.container = cont}}>
          <CityInfo city={_props.city} 
            date={today_item.dt_date} 
            sun_actions={today_item.sun_actions} 
          />
        <TempWind temps={today_item.temps} wind={today_item.wind} />
        <Weather weather={today_item.weather[0]} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

DayContainer.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(DayContainer)