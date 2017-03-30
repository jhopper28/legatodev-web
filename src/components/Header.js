import React from 'react'
import {
  Banner,
  Heading,
  Text,
  Space
} from 'rebass'
import { Navigation } from '.'
import backgroundImage from '../images/background-0.jpg'

export default () => (
  <Banner
    style={{
      minHeight: "100vh",
      backgroundAttachment: "fixed"
    }}
    backgroundImage={backgroundImage}>
    <Space auto/>
    <Heading level={1} big children="Legato"/>
    <Space auto/>
    <Text bold children="Smoothing the process of custom software development to keep your business humming"/>
    <Space auto/>
    <Navigation/>
    <Space auto/>
  </Banner>
)
