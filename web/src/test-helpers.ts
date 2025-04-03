import { faker } from '@faker-js/faker'
import { PlanningStatusEnum, ProjectStatusEnum } from 'types/graphql'

export const planningStatuses: {
  __typename: 'PlanningStatus'
  id: number
  name: PlanningStatusEnum
}[] = [
  {
    __typename: 'PlanningStatus',
    id: 1,
    name: 'ACTIVE',
  },
  {
    __typename: 'PlanningStatus',
    id: 2,
    name: 'WAITING',
  },
  {
    __typename: 'PlanningStatus',
    id: 3,
    name: 'PLANNED',
  },
  {
    __typename: 'PlanningStatus',
    id: 4,
    name: 'INACTIVE',
  },
]

export function getRandomPlanningStatus() {
  return faker.helpers.arrayElement(planningStatuses)
}

export const projectStatuses: {
  __typename: 'ProjectStatus'
  id: number
  name: ProjectStatusEnum
}[] = [
  {
    __typename: 'ProjectStatus',
    id: 1,
    name: 'OFFER',
  },
  {
    __typename: 'ProjectStatus',
    id: 2,
    name: 'CONCRETE_INQUIRY',
  },
  {
    __typename: 'ProjectStatus',
    id: 3,
    name: 'COMMITTED',
  },
  {
    __typename: 'ProjectStatus',
    id: 4,
    name: 'DECLINED',
  },
  {
    __typename: 'ProjectStatus',
    id: 5,
    name: 'IN_DEVELOPMENT',
  },
  {
    __typename: 'ProjectStatus',
    id: 6,
    name: 'DONE',
  },
]

export function getRandomProjectStatus() {
  return faker.helpers.arrayElement(projectStatuses)
}

export const crews = [
  { id: 1, name: 'No crew' },
  { id: 2, name: 'Agritech' },
  { id: 4, name: 'Consumer Electronics' },
  { id: 5, name: 'Industry' },
  { id: 6, name: 'HealthTech' },
  { id: 8, name: 'Supporting Functions' },
  { id: 10, name: 'Logistics & Mobility' },
  { id: 11, name: 'CleanTech' },
]

export function getRandomCrew() {
  return faker.helpers.arrayElement(crews)
}
