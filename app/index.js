/*********************************
  DEPENDENCIES
*********************************/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

/*********************************
  ASSETS
*********************************/
import 'normalize.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './src/assets/scss/app.scss'

/*********************************
  STORE
*********************************/
import store from './src/store/store'

/*********************************
  APP
*********************************/
import App from './App'

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)