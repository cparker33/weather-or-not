/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TransitionGroup from 'react-addons-transition-group'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  COMPONENTS
*********************************/
import Line from './Line'
/*********************************
  TEXT INPUT
*********************************/
class WeatherLine extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      show_line: false
    }
  }

  componentDidMount() {
    this.handleAnimationState()
  }

  handleAnimationState = (()=> {
    setTimeout(()=> { 
      this.setState({show_line: true})
    }, 1000)
  }).bind(this)

  render() {
    const _props = this.props
    const _state = this.state
    return (
      <div className='weather-line-conatainer'>
        {
          (()=> {
            if (_state.show_line) {
              return (
                <Line height={_props.height} />
              )
            }
          })()
        }        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

WeatherLine.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(WeatherLine)