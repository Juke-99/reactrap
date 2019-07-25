import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
          </Switch>
        </div>
      </Switch>
    );
  }
}

export default App;
