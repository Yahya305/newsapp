import React, { Component } from 'react'
import spinner from './Spinner.gif'

export class loading extends Component {
  render() {
    return (
      <div>
        <center><img src={spinner} alt="sasasasasdfd" width={"80px"} /></center>
      </div>
    )
  }
}

export default loading
