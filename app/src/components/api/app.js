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

// api.openweathermap.org/data/2.5/weather

function weather_api(data) {
  return axios.create({
    baseURL: weather_url
  })
}

/*********************************
  GET WEATHER DATA
**********************************/
export const getWeatherData = (async (zip)=> {
  zip = '89123' // DEV

  const _api = weather_api()
  let country = 'us'

  let city
  let time_stamp 
  let today_obj = {}
  let forecast_list

  let request_url = `weather${weather_key}&zip=${zip},${country}`
  
  // TODAY
  await _api.get(request_url).then((data)=> {
    let td = data.data
    // GET CITY - DATE - WEATHER - WIND - TEMPS - SUN
    city = td.name
    today_obj.dt_date = moment(td.dt, 'ms').format('MM-DD-YYYY')
    today_obj.time = moment().format('HH:mm:ss')
    time_stamp = today_obj.time
    today_obj.temps = td.main
    today_obj.sun_actions = td.sys
    today_obj.weather = td.weather
    today_obj.wind = td.wind

  })

  // FORECAST
  request_url = `forecast${weather_key}&zip=${zip},${country}`
  await _api.get(request_url).then((data)=> {
    let td = data.data
    // GET LIST
    forecast_list = td.list
  })

  let weather_data = {
    city,
    time_stamp,
    today_obj,
    forecast_list,
    has_data: true
  }  

  // SEND TO STORE
  store.dispatch({
    type: 'SET_WTHR_DATA',
    weather_data
  })

})

