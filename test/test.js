var assert = require('chai').assert
var expect = require('chai').expect

const getFahrenheit = require('../app/src/api/app.test').getFahrenheit
const  getWindDir = require('../app/src/api/app.test').getWindDir
const getWeatherImg = require('../app/src/api/app.test').getWeatherImg


describe('Weather-Or-Not Unit Test:', function() {

  describe('API - app.js Unit Test:', function() {

    describe('getFahrenheit() | Converts K to F', function() {

      it('Should Convert 100 K to 280 F', function() {
        let result = getFahrenheit(100)
        assert.equal(result,  -280)
      })
      it('Should Convert 500 K to 440 F', function() {
        let result = getFahrenheit(500)
        assert.equal(result,  440)
      })
    })

    describe('getWindDir() | Converts Degrees to Direction', function() {
      it('Should Convert 360 to North ', function() {
        let result = getWindDir(360)
        assert.equal(result,  'N')
      })
      it('Should Convert 180 to South ', function() {
        let result = getWindDir(180)
        assert.equal(result,  'S')
      })
      it('Should Convert 90 to East ', function() {
        let result = getWindDir(90)
        assert.equal(result,  'E')
      })
      it('Should Convert 270 to West ', function() {
        let result = getWindDir(270)
        assert.equal(result,  'W')
      })
    })

    describe('getWeatherImg() | Returns the correct image for weather discription and time:', function() {

      it('Should  return Clouds at 12 to cloudy_day', function() {
        let result = getWeatherImg('Clouds', 12)
        assert.equal(result,  'cloudy_day')
      })
      it('Should  return Snow at 18 to snowy_night', function() {
        let result = getWeatherImg('Snow', 18)
        assert.equal(result,  'snowy_night')
      })
      
    })


  })



})
