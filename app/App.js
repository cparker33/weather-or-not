// DEPENDENCIES
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

// COMPONENTS

// ROUTES
import Routes from './src/routes/Routes'

// DEV
const log = console.log // eslint-disable-line no-unused-vars

class App extends Component {
  render() {
    const sys_state = this.props.sys_state
    return (
      <div className='wthr-app-main'>
        <div className='app-body'>
          <Routes />
        </div>
        <div className="app-footer">
          <div>
            <a href='https://github.com/cparker33' target='_blank' className='footer-link' style={{textDecoration: 'none'}}>
              <i className='fa fa-github' />
              <div>Caleb Parker</div>
            </a>
          </div>
          <div className='footer-usa-disc'>
            <p>
              ***USA Only
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    sys_state: state
})

App.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(App)

