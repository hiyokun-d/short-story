import { render } from '@redwoodjs/testing/web'

import NavigatorbarLayout from './NavigatorbarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NavigatorbarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigatorbarLayout />)
    }).not.toThrow()
  })
})
