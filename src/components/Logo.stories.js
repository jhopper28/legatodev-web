import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Logo } from '.'

storiesOf('Logo', module)
  .add('animated SVG', () => (
    <Logo width="20em" />
  ))
