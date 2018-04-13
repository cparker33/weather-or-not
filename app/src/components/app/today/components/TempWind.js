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
import { getFahrenheit, getWindDir } from '../../../api/app'

/*********************************
  IMG
*********************************/
import temp_wind from '../../../../assets/img/weather_icons/wind.svg'


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

  render() {
    const _props = this.props
    return (
      <div className='app-temp-container-main'>
        <div className='temp-container'>
          <p>{`${getFahrenheit(_props.temps.temp)} ˚`}</p>
        </div>
        <div className='wind-container'>

          <div className='wind-speed'>
            {`${_props.wind.speed}`}
          </div>

          <div className='wind-dir'>
            {getWindDir(_props.wind.deg)}
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