import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from 'rebass'
import {
  Flex,
  Box,
  Grid
} from 'reflexbox'

const linkProps = [
  { to: "/", children: "Home" },
  { to: "/portfolio", children: "Work Samples" },
  { to: "/contact", children: "Contact" },
]

class Navigation extends React.Component {
  render () {
    const routePath = location.pathname

    return (
      <Flex
        {...this.props}
        align="center">
          {location.match}
          {linkProps.map((linkProp, i) => (
            routePath !== linkProp.to &&
            <Heading
              {...this.props}
              key={Math.random()}
              m={1}
              style={{
                backgroundColor: "rgba(0,0,0,.25)"
              }}>
              <Link
                {...this.props}
                {...linkProp}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  padding: "1rem"
                }}/>
            </Heading>
          ))}
      </Flex>
    )
  }
}

Navigation.propTypes = {
  column: React.PropTypes.bool
}

export default Navigation
