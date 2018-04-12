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
  COMPONENTS
*********************************/

/*********************************
  IMG
*********************************/
import temp_wind from '../../../../assets/img/sun_actions/wind.svg'

var dir_list = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']

/*********************************
  Temp Wind
*********************************/
class TempWind extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  getFahrenheit = ((cel)=> {
    let fah = (cel - 273.15) * 1.8 + 32
    return Math.round(fah)
  })

  getWindDir = ((angle)=> {
    var dir = Math.floor((angle / 22.5) + 0.5)
    return dir_list[(dir % 16)]
  })
  

  render() {
    const _props = this.props
    return (
      <div className='app-temp-container-main'>
        <div className='temp-container'>
          <p>{`${this.getFahrenheit(_props.temps.temp)} ˚`}</p>
        </div>
        <div className='wind-container'>

          <div className='wind-speed'>
            {`${_props.wind.speed}`}
          </div>

          <div className='wind-dir'>
            {this.getWindDir(_props.wind.deg)}
          </div>

          <div className='wind-icon'>
            <img src={temp_wind} />
          </div>
          
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

TempWind.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(TempWind)