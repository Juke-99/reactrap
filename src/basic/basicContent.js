import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class BasicContent extends React.Component {
  index() {
    return <h2>Home</h2>
  }

  about() {
    return <h2>About</h2>
  }

  users() {
    return <h2>Users</h2>
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <p>aaaaaaaaaaa</p>

          <Route path="/" exact component={this.index}></Route>
          <Route path="/about" component={this.about}></Route>
          <Route path="/users" component={this.users}></Route>
        </div>
      </Router>
    )
  }
}

export default BasicContent