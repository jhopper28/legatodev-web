import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from 'rebass'

const NavLink = ({ to, ...props }) => (
  <Heading
    style={{
      margin: "1em",
      backgroundColor: "rgba(0,0,0,.25)"
    }}>
    <Link {...props}
      style={{
        color: "#fff",
        textDecoration: "none",
        display: "block",
        padding: "1em"
      }}
      to={to}/>
  </Heading>
)

export default () => (
  <div>
    <NavLink to="/" children="Home"/>
    <NavLink to="/portfolio" children="Work Samples"/>
    <NavLink to="/contact" children="Contact"/>
  </div>
)
