import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  config,
  Container
} from 'rebass'
import './App.css'
import {
  Header,
  Home,
  Contact,
  Portfolio,
  Footer
} from '.'
import theme from '../theme'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      ...config,
      ...theme
    }
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: this.state
    }
  }

  render () {
    const {
      fontFamily,
      fontWeight,
      letterSpacing,
      color,
      backgroundColor,
    } = this.state

    return (
      <div style={{
          fontFamily,
          fontWeight,
          letterSpacing,
          color,
          backgroundColor
        }}>
        <Router>
          <Route render={({ location }) => (
            <div>
              <Header/>
              <Container style={{
                transition: 'transform 1s ease-out',
                transform: 'translateX(0)'
              }}>
                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  <Route
                    location={location}
                    key={location.key + "home"}
                    exact path="/"
                    component={Home}/>
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
              </Container>
              <Footer/>
            </div>
          )}/>
        </Router>
      </div>
    )
  }
}

export default App
