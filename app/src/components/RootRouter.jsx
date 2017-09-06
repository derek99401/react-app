/*
 * ./src/components/RootRouter.jsx
 */

import {Router, Route, hashHistory} from 'react-router'
import App from './App'

function RootRouter() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  )
}

export default RootRouter
