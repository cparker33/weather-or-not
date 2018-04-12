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

/*********************************
  COMPONENTS
*********************************/
import WeekDay from './WeekDay'

/*********************************
  LOCAL STYLE
*********************************/

/*********************************
  TEMP
*********************************/
class WeekContainer extends Component {
  
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
    return (
      <div className='week-container'>
        <WeekDay />
        <WeekDay />
        <WeekDay />
        <WeekDay />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

WeekContainer.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(WeekContainer)