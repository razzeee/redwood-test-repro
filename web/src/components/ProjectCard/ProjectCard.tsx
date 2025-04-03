import { motion } from 'framer-motion'
import type { Project } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import Card from '../Card/Card'
import ProjectStatus from '../ProjectStatus/ProjectStatus'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={routes.project({ id: project.id })}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="group"
      >
        <Card key={project.id} className="h-full">
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <div className="flex-col truncate">
                <h3 className="truncate text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="truncate text-sm text-gray-400">
                  {project.customer.name}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              <ProjectStatus project={project} />
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}

export default ProjectCard
