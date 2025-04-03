import { Project } from 'types/graphql'

import { useAuth } from 'src/auth'
import { planningStatusColor } from 'src/planningStatus'
import { projectStatusColor } from 'src/projectStatus'

import Badge from '../Badge/Badge'

const ProjectStatus = ({
  project,
}: {
  project: Pick<Project, 'projectStatus' | 'planningStatus'>
}) => {
  const { hasRole } = useAuth()

  return (
    <>
      <Badge {...projectStatusColor(project.projectStatus.name)} />
      {hasRole(['Admin', 'Business manager']) && (
        <Badge {...planningStatusColor(project.planningStatus.name)} />
      )}
    </>
  )
}

export default ProjectStatus
