import { faker } from '@faker-js/faker'

import Card from './Card'

export const withExampleText = () => {
  return <Card>{faker.lorem.text()}</Card>
}

export default { title: 'Components/Card' }
