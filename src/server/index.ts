import { random } from 'lodash-es'
import { sleep } from '../utils/sleep'
import { LIST_DATA } from '../data'

export async function getList() {
  await sleep(100)
  const randomNumber = random(1, 10)
  if (randomNumber >= 9) {
    throw new Error('bad request')
  }
  return LIST_DATA
}
