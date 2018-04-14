/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import { TweenMax, Power4 } from 'gsap'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  LOCAL API
*********************************/
import { getFahrenheit, getWindDir, getWeatherImg } from '../../../../api/app'

/*********************************
  IMG
*********************************/
import temp_wind from '../../../../assets/img/weather_icons/wind.svg'

/*********************************
  WEEK DAY
*********************************/
class WeekDay extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(callback) {
    let time_color = this.setTimeColor()
    const el = this.container
    TweenMax.fromTo(el, 1, {
      x: 300, 
      opacity: 0, 
      backgroundColor: 'none'
    }, 
    {
      x: 0, 
      opacity: 1, 
      backgroundColor: time_color, 
      ease: Power4.easeOut,
      delay: this.props.delay,
      onComplete: callback
    })
  }

  componentWillUnmount(callback) {
    const el = this.container
    TweenMax.fromTo(el, 0.5, 
      {
        x: 0, 
        opacity: 1
      }, 
      {
        x: 300, 
        opacity: 0, 
        ease: Power4.easeIn,
        onComplete: callback
      })
  }

  setTimeColor = (()=> {
    let time_color
    let hour = moment((this.getDateTime(this.props.day_item.dt_txt)[1]), 'hha').format('H')
    hour = Number(hour)
    if (hour <= 9 && hour > 5) {
      time_color = '#cfecf7'
    }
    if (hour > 9 && hour < 17) {
      time_color = '#62c1e5'
    }
    if (hour >= 17 || hour < 4) {
      time_color = '#4B8296'
    }
    return time_color
  })

  getDateTime = ((dt_txt)=> {
    let dt_txt_split = dt_txt.split(' ')
    let _day = moment(dt_txt_split[0], 'YYYY-MM-DD').day()
    let wk_dy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    _day = wk_dy[_day]
    let _time = moment(dt_txt_split[1], 'HH:mm:ss').format('hha')
    return [_day, _time]

  })

  getHour= ((dt_txt)=> {
    let dt_txt_split = dt_txt.split(' ')[1]
    let _hour = moment(dt_txt_split, 'HH:mm:ss').format('H')
    return Number(_hour)
  }) 

  render() {
    const _props = this.props
    const day_item = _props.day_item
    return (
      <div className='week-day-container' ref={(cont)=> {this.container = cont}}>
        <section className='wk-date-time-img-container'>
          <article className='wk-date-time-container'>
          {
            (()=> {
              if (_props.first) {
                return (
                  <span>
                    {this.getDateTime(day_item.dt_txt)[0]}
                  </span>
                )
              }
            })()
          }
            <div>
              {this.getDateTime(day_item.dt_txt)[1]}
            </div>
          </article>
          <article>
            <div className='temp-container'>
              <p>{`${getFahrenheit(day_item.main.temp)} ˚`}</p>
            </div>
          </article>

          <article className='wk-img-container'>
            <img className='weather-img' height='40' 
              src={getWeatherImg(day_item.weather[0].main, this.getHour(day_item.dt_txt))} 
              width='40'
            />
          </article>
        </section>
        <div className='wind-container'>
          <div className='wind-speed'>
            {`${day_item.wind.speed}`}
          </div>
          <div className='wind-dir'>
            {getWindDir(day_item.wind.deg)}
          </div>
          <div className='wind-icon'>
            <img src={temp_wind} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

WeekDay.propTypes = {
  day_item: PropTypes.object,
  delay: PropTypes.number,
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(WeekDay)

