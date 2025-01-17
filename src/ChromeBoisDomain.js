import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    const x = event.clientX
    const y = event.clientY //const [x, y] = [event.clientX, event.clientY]
    drawChromeBoiAtCoords(x, y)
  }

   handleKeyDown = (event) => {
     if (event.key === "a") {
        resize("+")
     }else if(event.key === "s") {
        resize("-")
     }
   }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onMouseDown={toggleCycling()}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
