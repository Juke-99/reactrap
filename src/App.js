import {Router, Link, Route} from 'react-router-dom'
import Home from './Compoments/Home'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}></Route>
      </div>
    )
  }
}

export default App