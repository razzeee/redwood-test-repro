import type { Meta } from '@storybook/react'

import ProjectStatus from './ProjectStatus'
import { standard } from './ProjectStatus.mock'

export const generated = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <ProjectStatus {...standard()} />
      </div>
      <div className="flex gap-2">
        <ProjectStatus {...standard()} />
      </div>
      <div className="flex gap-2">
        <ProjectStatus {...standard()} />
      </div>
      <div className="flex gap-2">
        <ProjectStatus {...standard()} />
      </div>
      <div className="flex gap-2">
        <ProjectStatus {...standard()} />
      </div>
      <div className="flex gap-2">
        <ProjectStatus {...standard()} />
      </div>
    </div>
  )
}

export default {
  title: 'Components/ProjectStatus',
  component: ProjectStatus,
} as Meta<typeof ProjectStatus>
