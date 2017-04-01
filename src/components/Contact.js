import React from 'react'
import {
  Input,
  Textarea,
  Button,
  Space
} from 'rebass'

const Contact = () => (
  <div id="contact">
    <form>
      <Input
        name="name"
        label="Name"/>
      <Input
        name="email"
        type="email"
        label="Email Address"/>
      <Textarea
        name="message"
        label="Message"/>
      <Button children="Send" />
      <Space />
      <Button theme="secondary" children="Cancel" />
    </form>
  </div>
)

export default Contact
