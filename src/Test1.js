import React, { Component } from 'react'

export default class Test1 extends Component {
    state ={
        name: 'anu'
    }
  render() {
    return (
      <div>Hello {this.state.name}</div>
    )
  }
}
