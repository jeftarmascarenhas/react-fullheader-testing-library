import React from 'react'
import { render, cleanup } from '@testing-library/react'

import FullHeader from '../Main'

import videoSrc from '../assets/video/demo.mp4'

const renderIgnoringUnstableFlushDiscreteUpdates = component => {
  // tslint:disable: no-console
  const originalError = console.error
  const error = jest.fn()
  console.error = error
  const result = render(component)
  expect(error).toHaveBeenCalledTimes(1)
  expect(error).toHaveBeenCalledWith(
    'Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.%s',
    expect.any(String),
  )
  console.error = originalError
  // tslint:enable: no-console
  return result
}

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
    const { queryByText } = render(<FullHeader />)
    expect(queryByText(/Curso TDD/i)).toBeNull()
  })
  it('should have subtitle when subtitle passed', () => {
    const subtitle = 'React Testing Librar'
    const { getByText } = render(<FullHeader subtitle={subtitle} />)
    expect(getByText(/React Testing Librar/i).textContent).toEqual(subtitle)
  })
  it('should have not subtitle when subtitle not passed', () => {
    const { queryByTestId } = render(<FullHeader />)
    expect(queryByTestId('subtitle')).toBeNull()
  })
  it('should have not text bgColor when bgColor passed', () => {
    const { queryByTestId } = render(<FullHeader bgColor="#eee" />)
    expect(queryByTestId('subtitle')).toBeNull()
  })
  it('should have not video when video tag passed', () => {
    const { queryByTestId } = render(<FullHeader bgColor="#eee" />)
    expect(queryByTestId('video')).toBeNull()
  })
  it('should have video when video tag', () => {
    const { queryByTestId } = renderIgnoringUnstableFlushDiscreteUpdates(
      <FullHeader video={videoSrc} autoPlay muted loop />,
    )
    const video = queryByTestId('video')
    expect(video).toBeTruthy()
  })
})
