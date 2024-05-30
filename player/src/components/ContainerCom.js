import React, { Component } from 'react'
import Player from './Player'
import { ListPlayers } from '../share/ListOfPlayers'
export default class ContainerCom extends Component {
    constructor(){
        super()
        this.state = {
          dataFromPlayers : ListPlayers
        }
      }
  render() {
    return (
        <Player propsFromContainer = {this.state.dataFromPlayers}/>
    )
  }
}
