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
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}
                  routes={[
                    {path: "/", exact: true, component: Home},
                    {path: "/contact", component: Contact},
                    {path: "/portfolio", component: Portfolio},
                    {render: () => (
                      <Message
                        rounded
                        theme="error"
                        children="So sorry. Whatever you're seeking is not here."/>
                    )}
                  ]}/>
              </Container>
            </div>
          )}/>
        </Router>
      </div>
    )
  }
}

export default App
