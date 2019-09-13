import React from 'rapeact'
import { render } from '@testing-library/react'

import FullHeader from '../Main'

describe('<FullHeader />', () => {
  it('rendering', () => {
    const { asFragment } = render(<FullHeader />)
    expect(asFragment()).toMatchSnapshot()
  })
})
