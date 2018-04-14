/*********************************
  DEPENDENCIES
*********************************/
require('babel-polyfill')
// var axios = require('axios')
var moment = require('moment')

/*********************************
  DEV
**********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  WEATHER API
**********************************/
// const weather_url = 'http://api.openweathermap.org/data/2.5/'
// const weather_key = '?id=524901&APPID=abce63bf5700e4817b48a4baf02a0837'

const dir_list = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']




module.exports = {

  getFahrenheit: function(kel) {
    let fah = (kel - 273.15) * 1.8 + 32
    return Math.round(fah)
  },

  getWindDir: function(angle) {
    var dir = Math.floor((angle / 22.5) + 0.5)
    return dir_list[(dir % 16)]
  },

  getWeatherImg: function (description, hour = moment().format('H')) {
    const is_daytime = ((hour)=> {
      let sunrise = 7
      let sunset = 17
      if (hour < sunset && hour > sunrise) {
        return true
      } else {
        return false
      }
    })
    description = description.toLowerCase()
    if (description === 'clear') {
      if (is_daytime(hour)) {
        return ('day_cleat')
      } else {
        return ('night_clear')
      }
    } else if (description === 'clouds' || description === 'haze') {
      if (is_daytime(hour)) {
        return ('cloudy_day')
      } else {
        return ('cloudy_night')
      }
    } else if (description === 'rain') {
      if (is_daytime(hour)) {
        return ('rainy_day')
      } else {
        return ('rainy_night')
      }
    }  else if (description === 'snow') {
      if (is_daytime(hour)) {
        return ('snowy_day')
      } else {
        return ('snowy_night')
      }
    }
  }

}



