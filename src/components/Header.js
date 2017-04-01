import React from 'react'
import {
  Banner,
  Heading,
  Text,
  Space,
  Fixed,
  config
} from 'rebass'
import {
  Flex,
  Box
} from 'reflexbox'
import { Navigation } from '.'
import backgroundImage from '../images/background-0.jpg'

class Header extends React.Component {
  render () {
    const routeIsHome = location.pathname === "/"
    const [ bannerMinHeight, backgroundAttachment, padding ] =
      routeIsHome ?
        [ "100vh", "auto", config.scale[4] ] :
        [ "auto", "scroll", config.scale[1] ]

    return (
      <Banner
        style={{
          minHeight: bannerMinHeight,
          backgroundAttachment: backgroundAttachment,
          padding
        }}
        backgroundImage={backgroundImage}>
        {
          routeIsHome &&
          <FullPageNavHeader/>
        }
        {
          !routeIsHome &&
          <TopNavHeader/>
        }
      </Banner>
     )
  }
}

const FullPageNavHeader = () => (
  <div>
    <Space auto/>
    <Title big/>
    <Space auto/>
    <Flex align="center" justify="center">
      <Box col={6}>
        <Text bold children="Smoothing the process of custom software development to keep your business humming"/>
        <Space auto/>
        <Navigation column size={3}/>
      </Box>
    </Flex>
    <Space auto/>
  </div>
)

const TopNavHeader = () => (
  <Flex
    align="baseline">
    <Box><Title size={5}/></Box>
    <Box p={1}><Text size={5}>{">"}</Text></Box>
    <Box><Navigation size={5}/></Box>
  </Flex>
)

const Title = (props) => (
  <Heading level={1} {...props} children="Legato"/>
)

export default Header
