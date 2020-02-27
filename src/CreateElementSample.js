import React from 'react'
import AddElement from './AddElement'

class CreateElementSample extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 1,
      items: []
    }
  }

  addElement() {
    this.setState({
      index: this.state.index + 1
    })

    let props = {index: this.state.index}

    this.state.items.push(React.createElement(AddElement, props, 'React.createElement(...)'))
  }

  render() {
    return (
      <div>
        <button onClick={this.addElement.bind(this)}>add element</button>

        <div>
          {
            this.state.items.map((content, i) => {
              return content
            })
          }
        </div>
      </div>
    )
  }
}

export default CreateElementSample