/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { TweenMax } from 'gsap'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TransitionGroup from 'react-addons-transition-group'

/*********************************
  COMPONENTS
*********************************/


/*********************************
  LOCAL STYLE
*********************************/
// import sunny from '../../assets/img/weather/sunny.svg'

/*********************************
  HOMEPAGE
*********************************/
class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      country_is_toggled: false
    }
  }

  componentDidMount(callback) {
    const el = this.container
    TweenMax.fromTo(el, 0.8, {height: 0, opacity: 1}, {height: this.props.height, opacity: 1, onComplete: callback});
  }

  componentWillUnmount(callback) {
    const el = this.container
    TweenMax.fromTo(el, 0, {height: this.props.height, opacity: 1}, {height: 0, opacity: 1, onComplete: callback});
  }

  render() {
    return (
      <div className='weather-line' ref={(cont)=> {this.container = cont}} />
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

HomePage.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(HomePage)