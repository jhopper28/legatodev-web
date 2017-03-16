import React, { Component } from 'react'
import Logo from './Logo.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="50%" className="App-logo" />
          <h2>Welcome to Legato</h2>
        </div>
        <p className="App-intro">
          Smoothing the process of custom software development to keep your business singing.
        </p>
      </div>
    )
  }
}

export default App
