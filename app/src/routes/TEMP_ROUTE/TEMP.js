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

/*********************************
  LOCAL STYLE
 ********************************/

/*********************************
  TEMP
*********************************/
class TEMP extends Component {
  
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
      <div className='app-cont'>
        TEMP
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

TEMP.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(TEMP)