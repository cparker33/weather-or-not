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
  TEXT INPUT
*********************************/
class TextInput extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      input_text: null
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleTextInput = (e)=> {
    this.props.onChange(e.target.value)
    this.setState({
      input_text: e.target.value
    })
  }

  render() {
    const _props = this.props
    return (
      <div className="input-group mb-3" style={{maxWidth: _props.maxWidth}}>
        <input aria-describedby="basic-addon2" className="form-control app-text-input" 
          placeholder={_props.placeholder} type="text" onChange={this.handleTextInput} 
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2"> 
            <i className={_props.icon} />
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

TextInput.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(TextInput)