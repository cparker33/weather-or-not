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
import sunny from '../../../../assets/img/weather/sunny.svg'

/*********************************
  Icon Container
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

  render() {
    const _props = this.props
    return (
      <div className='app-weather-container'>

        <div className='weather-img-conatainer'>
          <img className='weather-img' src={sunny} />
        </div>

        <div className='weather-disc'>
          {_props.weather.main}
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