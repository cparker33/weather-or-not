/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'


/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  DEV
*********************************/
import { getWeatherImg } from '../../../../api/app'

/*********************************
  WEATHER
*********************************/
class Weather extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  setTimeColor = (()=> {
    let time_color
    let hour = moment().format('H')
    hour = Number(hour)
    if (hour <= 9 && hour > 5) {
      time_color = '#cfecf7'
    }
    if (hour > 9 && hour < 17) {
      time_color = '#62c1e5'
    }
    if (hour >= 17 || hour < 4) {
      time_color = '#4B8296'
    }
    log(time_color)
    return time_color
  })



  render() {
    const _props = this.props
    const description = _props.weather.main
    return (
      <div className='app-weather-container'>

        <div className='weather-img-conatainer'>
          <img className='weather-img' src={getWeatherImg(description)} />
        </div>

        <div className='weather-disc'>
          {description}
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

Weather.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(Weather)