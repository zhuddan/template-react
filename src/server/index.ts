import { LIST_DATA } from '../data'
import { sleep } from '../utils/sleep'

export async function getList() {
  await sleep(100)
  return LIST_DATA
}
