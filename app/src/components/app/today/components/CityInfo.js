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
  IMG
*********************************/
import sunrise from '../../../../assets/img/weather_icons/sunrise.svg'
import sunset from '../../../../assets/img/weather_icons/sunset.svg'

/*********************************
  CITY INFO 
*********************************/
class CityInfo extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  getDateTime = ((ms)=> {
    return moment(ms, 'X').format('hh:mm')
  })

  render() {
    const _props = this.props
    return (
      <div className='app-city-info-container'>
        <div className='city-info-city'>{_props.city}</div>
        <div className='city-info-date'>{_props.date}</div>
        <div className='sun-action-container'>
          <div className='sun-action-item'>
            <div>
            {`${this.getDateTime(_props.sun_actions.sunrise)} am` }
            </div>
            <div>
              <img className='sun-img' src={sunrise} />
            </div>
          </div>
          <div className='sun-action-item'>
            <div>
            {`${this.getDateTime(_props.sun_actions.sunset)} pm` }
            </div>
            <div>
              <img className='sun-img' src={sunset} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

CityInfo.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(CityInfo)