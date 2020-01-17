import React from 'react'
import { render, cleanup } from '@testing-library/react'

import FullHeader from '../Main'

afterEach(cleanup)

describe('<FullHeader />', () => {
  it('rendering', () => {
    const { asFragment } = render(<FullHeader />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should have title when text to title passed', () => {
    const { getByText, queryByTestId } = render(
      <FullHeader title="TDD in React" />,
    )
    expect(getByText(/tdd in react/i).textContent).toEqual('TDD in React')
    expect(queryByTestId('title')).toBeDefined()
  })
  it('should not have title when title not passed', () => {
    const { queryByTestId } = render(<FullHeader />)
    expect(queryByTestId('title')).toBeNull()
  })
  it('should have subtitle when subtitle passed', () => {
    const subtitle = 'React Testing Librar'
    const { queryByTestId } = render(<FullHeader subtitle={subtitle} />)
    const SubTitle = queryByTestId('subtitle').textContent
    expect(SubTitle).toEqual(subtitle)
  })
  it('should have not subtitle when subtitle not passed', () => {
    const { queryByTestId } = render(<FullHeader />)
    expect(queryByTestId('subtitle')).toBeNull()
  })
})
