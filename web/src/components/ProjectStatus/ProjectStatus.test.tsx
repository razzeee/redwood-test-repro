import { render } from '@cedarjs/testing/web'

import ProjectStatus from './ProjectStatus'
import { standard } from './ProjectStatus.mock'

describe('ProjectStatus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectStatus {...standard()} />)
    }).not.toThrow()
  })
})
