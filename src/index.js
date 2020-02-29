import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import AlertSample from './AlertSample';

const border = {
  'borderBottom': 'solid black 1px'
}

const routing = (
  <Router>
    <div>
      <div style={border}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/hello" component={Hello} />
          <Route path="/alert-sample" component={AlertSample} />
        </Switch>
      </div>

      <p>
        <Link to="/">トップ</Link>
      </p>

      <p>
        <Link to="/hello">Hello</Link>
      </p>

      <p>
        <Link to="/alert-sample">AlertSample</Link>
      </p>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
