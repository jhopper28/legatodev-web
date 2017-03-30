import React from 'react'
import {
  Input,
  Textarea,
  Button,
  Space
} from 'rebass'

export default (props) => (
  <div id="contact">
    <form>
      <Input
        name='name'
        label='Name'
        value={""}/>
      <Input
        name='email'
        label='Email Address'
        value={""}/>
      <Textarea
        value={""}
        name='message'
        label='Message'/>
      <Button children='Send' />
      <Space />
      <Button theme='secondary' children='Cancel' />
    </form>
  </div>
)
