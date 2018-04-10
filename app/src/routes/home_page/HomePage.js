/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import RubberBand from 'react-reveal/RubberBand'
import Tada from 'react-reveal/Tada'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  LOCAL API
*********************************/
import {getWeatherData} from '../../components/api/app'

/*********************************
  COMPONENTS
*********************************/
import TextInput from '../../components/app/TextInput'

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

  componentDidMount() {
    getWeatherData()
  }

  handleCountryToggle = (()=> {
    // this.setState({})
    log('click TOGGLE')
  })

  handleUsername = (e)=> {
    this.setState({
      guest_b_first_name: e.target.value
    })
  }

  render() {

    return (
      <div className='app-component-wrapper'>
        

        <section className='zip-form-card'>

          <article className='app-card-title'>

            <RubberBand delay={1000}>
              <h3>Weather Or Not</h3>
            </RubberBand>
          </article>

          <article className='zip-text-input-wrapper'>
            <div>
              <TextInput icon='fa fa-map' maxWidth='220px' 
                placeholder='Zip Code'
              />
            </div>
          
          <div>
            <button className="btn btn-primary" type="button">Go</button> 
          </div>

          </article>

          
          <article className='app-card-inst'>
            <Tada delay={5000}>
              <p>
                Enter a zip code and press Go!
              </p>
            </Tada>
          </article>
        </section>

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