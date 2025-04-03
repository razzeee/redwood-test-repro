import { render, waitFor } from '@redwoodjs/testing/web'

import ProjectCard from './ProjectCard'
import { standard } from './ProjectCard.mock'

describe('ProjectCard', () => {
  it('renders successfully', () => {
    const project = standard().projectWithData
    expect(async () => {
      await waitFor(() => {
        render(<ProjectCard project={project} />)
      })
    }).not.toThrow()
  })

  it('renders successfully when data is missing', () => {
    const project = standard().projectWithDataMissing
    expect(async () => {
      await waitFor(() => {
        render(<ProjectCard project={project} />)
      })
    }).not.toThrow()
  })
})
