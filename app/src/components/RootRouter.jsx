/*
 * ./src/components/RootRouter.jsx
 */

import React, {Component} from 'react'
import {
  HashRouter,
  Route
} from 'react-router-dom';

import App from './App'

function RootRouter() {
  return (
    <HashRouter>
       <div>
         <Route exact path="/" component={App} />
       </div>
    </HashRouter>
  )
}

export default RootRouter
