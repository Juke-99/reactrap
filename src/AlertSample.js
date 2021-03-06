import React from 'react'
import Alert from "./Alert";

class AlertSample extends React.Component {
  render() {
    return (
      <div>
        <Alert variant="primary">A simple primary alert—check it out!</Alert>
        <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
        <Alert variant="success">A simple success alert—check it out!</Alert>
        <Alert variant="danger">A simple danger alert—check it out!</Alert>
        <Alert variant="warning">A simple warning alert—check it out!</Alert>
        <Alert variant="info">A simple info alert—check it out!</Alert>
        <Alert variant="light">A simple light alert—check it out!</Alert>
        <Alert variant="dark">A simple dark alert—check it out!</Alert>
      </div>
    )
  }
}

export default AlertSample