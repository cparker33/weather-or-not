/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import shortid from 'shortid' 
import TransitionGroup from 'react-transition-group/TransitionGroup'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  COMPONENTS
*********************************/
import WeekDay from './components/WeekDay'

/*********************************
  WEEK CONTAINER
*********************************/
class WeekContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const _props = this.props
    return (
      <div className='week-container'>
        {
          _props.day_items.map((day_item, i)=> {
            if (i === 0) {
              return (
                <TransitionGroup key={shortid.generate()}>
                  <WeekDay day_item={day_item} delay={i} first key={shortid.generate()} />
                </TransitionGroup>
              )
            } else {
              return (
                <TransitionGroup key={shortid.generate()}>
                  <WeekDay day_item={day_item} delay={i/10} key={shortid.generate()}  />
                </TransitionGroup>
              )
            }
            
          })
        }
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