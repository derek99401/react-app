/*
 * ./src/index.js
 * webpack entry file
 */

import React from 'react'
import ReactDOM from 'react-dom'
import RootRouter from './components/App'

ReactDOM.render(
  <RootRouter />, document.getElementById('root')
)
