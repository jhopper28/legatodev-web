import React from 'react'
import {
  Footer as BaseFooter,
  Text,
  Space
} from 'rebass'

export default () => (
  <div>
    <BaseFooter
      color="white"
      backgroundColor="black">
      <Space auto/>
      <Text small children="© 2017 Legato"/>
      <Space auto/>
    </BaseFooter>
  </div>
)
