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
  LOCAL API
*********************************/

/*********************************
  COMPONENTS
*********************************/
import IconContainer from './components/IconContainer'
import CityInfo from './components/CityInfo'
import TempWind from './components/TempWind'

/*********************************
  TEMP
*********************************/
class DayContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  getDateTime = ((dt_txt)=> {
    // let day_time = moment(td.dt, 'ms').format('MM-DD-YYYY HH:mm')
  })

  render() {
    const _props = this.props
    const today_item = _props.today_item
    log('today_item-> ', today_item)

    return (
      <div className='day-container'>
        <CityInfo city={_props.city} 
          date={today_item.dt_date} 
          sun_actions={today_item.sun_actions} />

        <TempWind temps={today_item.temps} wind={today_item.wind} />

        <IconContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

DayContainer.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(DayContainer)

/**
  <TransitionGroup>
          {
            (()=> {
              if (this.state.shouldShowBox) {
                return (
                  <Box key={12} />
                )
              }
            })()
          }
        </TransitionGroup>
 */