import { faker } from '@faker-js/faker'

import {
  getRandomCrew,
  getRandomPlanningStatus,
  getRandomProjectStatus,
} from 'src/test-helpers'

export const standard = () => ({
  projectWithData: {
    id: 1,
    name: faker.commerce.productName(),
    location: {
      name: faker.location.city(),
    },
    crew: getRandomCrew(),
    insertedAt: faker.date.past(),
    updatedAt: faker.date.past(),
    customer: {
      name: faker.company.name(),
    },
    planningStatus: getRandomPlanningStatus(),
    projectStatus: getRandomProjectStatus(),
    positionProject: [
      {
        id: 1,
        assignedUser: {},
        positionName: faker.person.jobType(),
        assignedWorkingHours: faker.number.int({ min: 1, max: 40 }),
        seat: [...new Array(7)].map((_item, index) => {
          return {
            id: index,
            neededWorkingHours: faker.number.int({ min: 10, max: 40 }),
            startingFrom: faker.date.recent(),
            endingAt: faker.date.future(),
          }
        }),
      },
      {
        id: 2,
        assignedUser: {},
        positionName: faker.person.jobType(),
        assignedWorkingHours: faker.number.int({ min: 1, max: 40 }),
        seat: [...new Array(7)].map((_item, index) => {
          return {
            id: index,
            neededWorkingHours: faker.number.int({ min: 10, max: 40 }),
            startingFrom: faker.date.recent(),
            endingAt: faker.date.future(),
          }
        }),
      },
      {
        id: 3,
        assignedUser: null,
        positionName: faker.person.jobType(),
        assignedWorkingHours: faker.number.int({ min: 1, max: 40 }),
        seat: [...new Array(7)].map((_item, index) => {
          return {
            id: index,
            neededWorkingHours: faker.number.int({ min: 10, max: 40 }),
            startingFrom: faker.date.recent(),
            endingAt: faker.date.future(),
          }
        }),
      },
      {
        id: 4,
        assignedUser: null,
        positionName: faker.person.jobType(),
        assignedWorkingHours: faker.number.int({ min: 1, max: 40 }),
        seat: [...new Array(7)].map((_item, index) => {
          return {
            id: index,
            neededWorkingHours: faker.number.int({ min: 10, max: 40 }),
            startingFrom: faker.date.recent(),
            endingAt: faker.date.future(),
          }
        }),
      },
    ],
  },
  projectWithDataMissing: {
    id: 1,
    name: faker.commerce.productName(),
    location: {
      name: faker.location.city(),
    },
    crew: getRandomCrew(),
    insertedAt: faker.date.past(),
    updatedAt: faker.date.past(),
    customer: {
      name: faker.company.name(),
    },
    planningStatus: getRandomPlanningStatus(),
    projectStatus: getRandomProjectStatus(),
    positionProject: [],
  },
})
