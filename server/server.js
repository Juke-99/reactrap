import { StaticRouter } from "react-router"
import App from "../src/App";

class Server extends React.Component {
  render() {
    const context = {}
    const mar

    return (
      <StaticRouter location={req.url} context={context}>
        <App></App>
      </StaticRouter>
    )
  }
}

export default Server