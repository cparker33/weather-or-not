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
  DATE & TIME 
*********************************/
class DateTimeContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    // let day_time = moment(td.dt, 'ms').format('MM-DD-YYYY HH:mm')
  }

  render() {
    const _props = this.props
    return (
      <div className='app-icon-container-main'>
        date_txt
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

DateTimeContainer.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(DateTimeContainer)