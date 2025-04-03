import {
  getRandomPlanningStatus,
  getRandomProjectStatus,
} from 'src/test-helpers'

export const standard = () => ({
  project: {
    projectStatus: getRandomProjectStatus(),
    planningStatus: getRandomPlanningStatus(),
  },
})
