import {Router, Link, Route} from 'react-router-dom'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home}></Route>
      </Router>
    )
  }
}

export default App