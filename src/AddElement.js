import React from 'react'

class AddElement extends React.Component {
  render() {
    return <p key={this.props.index}>add {this.props.index}</p>
  }
}

export default AddElement