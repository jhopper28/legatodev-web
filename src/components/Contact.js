import React from 'react'
import {
  Input,
  Textarea,
  Button,
  Space
} from 'rebass'

const Contact = () => {
  return (
    <div>
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
}

export default Contact
