import { render, screen } from '@redwoodjs/testing/web'

import Badge from './Badge'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Badge', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Badge text={'Badge text'} />)
    }).not.toThrow()

    expect(screen.getByText('Badge text')).toBeInTheDocument()
  })
})
