import ProjectCard from './ProjectCard'
import { standard } from './ProjectCard.mock'

export const randomData = () => {
  return <ProjectCard project={standard().projectWithData} />
}

export const withMissingData = () => {
  return <ProjectCard project={standard().projectWithDataMissing} />
}

export default { title: 'Components/ProjectCard' }
