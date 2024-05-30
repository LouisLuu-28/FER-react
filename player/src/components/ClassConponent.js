import React, { Component } from 'react'

export default class ClassConponent extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    return (
      <div>ClassCount
      <p>Count: {this.state.count}</p>
      <button onClick={()=>(this.setState({count:this.state.count+1}))}> Click </button> 
      </div>
    )
  }
}
