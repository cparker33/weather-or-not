/*********************************
  DEPENDENCIES
*********************************/
import store from '../store/store' 
import axios from 'axios'
import moment from 'moment'

/*********************************
  DEV
**********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  WEATHER API
**********************************/
const weather_url = 'http://api.openweathermap.org/data/2.5/'
const weather_key = '?id=524901&APPID=abce63bf5700e4817b48a4baf02a0837'

/*********************************
  IMG
*********************************/
import day from '../assets/img/weather_actions/day.svg'
import night from '../assets/img/weather_actions/night.svg'
import cloudy_day from '../assets/img/weather_actions/cloudy_day.svg'
import cloudy_night from '../assets/img/weather_actions/cloudy_night.svg'
import rainy_day from '../assets/img/weather_actions/cloudy_rainy_day.svg'
import rainy_night from '../assets/img/weather_actions/cloudy_rainy_night.svg'
import snowy_day from '../assets/img/weather_actions/cloudy_snowy_day.svg'
import snowy_night from '../assets/img/weather_actions/cloudy_snowy_night.svg'


const dir_list = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']


const weather_api = (()=> {
  return axios.create({
    baseURL: weather_url
  })
})

/*********************************
  GET WEATHER DATA
**********************************/
export const getWeatherData = (async (zip)=> {
  const _api = weather_api()
  let country = 'us'
  let city
  let time_stamp 
  let sunset
  let sunrise
  let today_obj = {}
  let hour_list = []
  let forecast_list
  let item_count = 0
  let forecast_days = []

  let request_url = `weather${weather_key}&zip=${zip},${country}`
  // TODAY
  await _api.get(request_url).then((data)=> {
    let td = data.data
    // GET CITY - DATE - WEATHER - WIND - TEMPS - SUN
    city = td.name
    today_obj.dt_date = moment(td.dt, 'X').format('MM-DD-YYYY')
    today_obj.time = moment().format('HH:mm:ss')
    time_stamp = today_obj.time
    today_obj.temps = td.main
    today_obj.sun_actions = td.sys
    sunset = Number(moment(td.sys.sunset, 'X').format('H'))
    sunrise  = Number(moment(td.sys.sunrise, 'X').format('H'))
    today_obj.weather = td.weather
    today_obj.wind = td.wind
  })

  // FORECAST
  request_url = `forecast${weather_key}&zip=${zip},${country}`
  await _api.get(request_url).then((data)=> {
    let td = data.data
    forecast_list = td.list.filter((day_obj, i)=> {
      if (i !== 0) {
        return day_obj
      }
    })
  })

  forecast_list.forEach((hour)=> { 
    item_count ++ 
      let dt_txt_split = hour.dt_txt.split(' ')[1]
      let _time = moment(dt_txt_split, 'HH:mm:ss').format('hha')
      if (_time === '06am' || _time === '09am' || _time === '03pm' || _time === '09pm') {
        hour_list.push(hour)
      }  
      if (item_count === 8) {
        forecast_days.push(hour_list)
        hour_list = []
        item_count = 0
      }
  })

  let weather_data = {
    city,
    time_stamp,
    sunset,
    sunrise,
    today_obj,
    forecast_days,
    has_data: true
  }  
  // log('WEATHER_DATA-> ', weather_data)
  // SEND TO STORE
  store.dispatch({
    type: 'SET_WTHR_DATA',
    weather_data
  })
})

/*********************************
  CLEAR WEATHER DATA
**********************************/
export const clearWeatherData = (async ()=> {
  let weather_data = {
    city: null,
    time_stamp: null,
    today_obj: null,
    forecast_list: null,
    has_data: false
  }  

  // SEND TO STORE
  store.dispatch({
    type: 'SET_WTHR_DATA',
    weather_data
  })
})

/*********************************
  GET WEATHER IMAGE
*********************************/
export const getWeatherImg = ((description, hour = moment().format('H'))=> {
  const is_daytime = ((hour)=> {
    let sunset = store.getState().app_state.weather_data.sunset
    let sunrise = store.getState().app_state.weather_data.sunrise
    if (hour < sunset && hour > sunrise) {
      return true
    } else {
      return false
    }
  })

  description = description.toLowerCase()
  if (description=== 'clear') {
    if (is_daytime(hour)) {
      return (day)
    } else {
      return (night)
    }
  } else if (description === 'clouds' || description === 'haze') {
    if (is_daytime(hour)) {
      return (cloudy_day)
    } else {
      return (cloudy_night)
    }
  } else if (description === 'rain' || description === 'thunderstorm') {
    if (is_daytime(hour)) {
      return (rainy_day)
    } else {
      return (rainy_night)
    }
  }  else if (description === 'snow') {
    if (is_daytime(hour)) {
      return (snowy_day)
    } else {
      return (snowy_night)
    }
  }


})

/*********************************
  GET FAHRENHEIT
*********************************/
export const getFahrenheit = ((kel)=> {
  let fah = (kel - 273.15) * 1.8 + 32
  return Math.round(fah)
})

/*********************************
  GET WIND DIRECTION
*********************************/
export const getWindDir = ((angle)=> {
  var dir = Math.floor((angle / 22.5) + 0.5)
  return dir_list[(dir % 16)]
})

