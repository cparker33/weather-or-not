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
import ZipcodeCard from '../../components/app/zipcode_card/ZipcodeCard'
import MainView from '../../components/app/main_view/MainView'

/*********************************
  HOMEPAGE
*********************************/
class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      has_data: false
    }
  }

  componentDidMount() {
    // ...    
  }

  render() {
    const _props = this.props
    const has_data = _props.sys_state.app_state.weather_data.has_data
    return (
      <div className='app-component-wrapper'>
        {
          (()=> {
            if (!has_data) {
              return (
                <ZipcodeCard />
              )
            } else {
              return (
                <MainView has_data={has_data} />
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

HomePage.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(HomePage)