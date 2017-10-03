import React, {Component } from 'react'
import CollectionList from './CollectionList'

class App2 extends Component {
  state = {
    users: [
        { id: 1, name: "Eddie", completed: false },
      { id: 2, name: "Bobby", completed: false },
      { id: 3, name: "Danny ", completed: false },
    ]
  }

  render() {
    return (
      <CollectionList collection={this.state.users} />
    )
  }

}

export default App2
