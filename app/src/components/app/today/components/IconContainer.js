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
import WeatherLine from '../../weather_line/WeatherLine'

/*********************************
  IMG
*********************************/
import sunny from '../../../../assets/img/weather/sunny.svg'

/*********************************
  Icon Container
*********************************/
class IconContainer extends Component {
  
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
      <div className='app-icon-container-main'>
        <div className='img-container'>
          <img className='app-icon' src={sunny} />
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

IconContainer.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(IconContainer)