import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'

const App = () => {
  return (
    <Router>
      <Route render={({ location }) => (
        <div className="App">
          <div className="App-header">
            <h2>Legato</h2>
            <Navigation/>
            <Logo width="50%" />
          </div>
          <div className="App-content">
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
              <Route
                location={location}
                key={location.key + "home"}
                exact path="/" component={Home}/>
              <Route
                location={location}
                key={location.key + "contact"}
                path="/contact"
                component={Contact}/>
              <Route
                location={location}
                key={location.key + "portfolio"}
                path="/portfolio"
                component={Portfolio}/>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      )}/>
    </Router>
  )
}

export default App
