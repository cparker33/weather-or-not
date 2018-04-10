/*********************************
  DEPENDENCIES
*********************************/
import store from '../store/store' // eslint-disable-line no-unused-vars
import axios from 'axios'

/*********************************
  DEV
**********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  WEATHER API
**********************************/
const wthr_url = 'http://api.openweathermap.org/data/2.5/'
const wthr_key = 'forecast?id=524901&APPID=abce63bf5700e4817b48a4baf02a0837'

function wthr_api(data) { // eslint-disable-line no-unused-vars
  return axios.create({
    baseURL: wthr_url
  })
}



export const getWeatherData = ((zip)=> {
  log('zip-> ', zip)
  const _api = wthr_api()
  zip = '89123'
  let country = 'us'
  let request_url = `${wthr_key}&zip=${zip},${country}`
  _api.get(request_url).then((data)=> {
    log('data-> ', data.data)  // eslint-disable-line no-unused-vars
  }), (error)=> {
    log('ERROR', error)
  }

})

