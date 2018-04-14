/*********************************
  DEPENDENCIES
*********************************/
import React from 'react'
import { Route } from 'react-router-dom' 

/*********************************
  ROUTE COMPONENTS
*********************************/
import HomePage from './home_page/HomePage'

const Routes = () => (
  <div>
    <Route component={HomePage} exact path='/' />
  </div>
)

export default Routes