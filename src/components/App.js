import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  wrapSwitch,
  withScroll
} from 'rrc'
import {
  config,
  Container,
  Message
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

    const TranSwitch = wrapSwitch(ReactCSSTransitionGroup)

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
              <Container>
                <TranSwitch
                  transitionName="fade"
                  component="div"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  routes={[
                    {path: "/", exact: true, component: withScroll(Home, {propId: () => "#home"})},
                    {path: "/contact", component: withScroll(Contact, {propId: () => "#contact"})},
                    {path: "/portfolio", component: withScroll(Portfolio, {propId: () => "#portfolio"})},
                    {render: () => (
                      <Message
                        rounded
                        theme="error"
                        children="So sorry. Whatever you're seeking is not here."/>
                    )}
                  ]}/>
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
