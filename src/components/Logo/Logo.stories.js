import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Logo from './Logo';

storiesOf('Logo', module)
  .add('animated SVG', () => (
    <Logo width="20em" />
  ));
