import { Project } from 'types/graphql'

import { useAuth } from 'src/auth'

import Badge from '../Badge/Badge'

const ProjectStatus = ({
  project,
}: {
  project: Pick<Project, 'projectStatus' | 'planningStatus'>
}) => {
  const { hasRole } = useAuth()

  return (
    <>
      <Badge />
      {hasRole(['Admin', 'Business manager']) && <Badge />}
    </>
  )
}

export default ProjectStatus
