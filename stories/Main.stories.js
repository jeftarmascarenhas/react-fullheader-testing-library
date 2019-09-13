import React from 'react'
import { storiesOf } from '@storybook/react'

import FullHeader from '../src/Main'

storiesOf('FullHeader', module)
  .add('with title', () => <FullHeader />)
  .add('with emoji', () => <FullHeader />)
