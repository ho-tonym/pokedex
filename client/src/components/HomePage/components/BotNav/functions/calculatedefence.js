import jsonTypes from '../../../../../assets/json/types.json'
import findDuplicates from './helper/findDuplicates'

export default function calculateDefence(types) {
  if (types <= 0) return

  const weaknessObj = {
    take4: [],
    take2: [],
    take05: [],
    take0: [],
    take025: [],
    all: [],
  }
  const typesArray = types.map(e => e.type.name)
  typesArray.forEach((e) => {
    weaknessObj.take2.push(...jsonTypes[e].take2)
    weaknessObj.take05.push(...jsonTypes[e].take05)
    weaknessObj.take0.push(...jsonTypes[e].take0)
  })
  if (typesArray.length === 1) return weaknessObj

  // if take 0 remove it
  const duplicatesTake05 = findDuplicates(weaknessObj.take05)
  weaknessObj.take0.forEach(e => {
    weaknessObj.take2 = weaknessObj.take2.filter(value => value !== e)
    weaknessObj.take05 = weaknessObj.take05.filter(value => value !== e)
  })

  // populate and remove take 4
  const duplicatesTake2 = findDuplicates(weaknessObj.take2)
  duplicatesTake2.forEach(e => {
    weaknessObj.take2 = weaknessObj.take2.filter(value => value !== e)
    weaknessObj.take4.push(e)
  })

  // populate and remove take 025
  duplicatesTake05.forEach(e => {
    weaknessObj.take05 = weaknessObj.take05.filter(value => value !== e)
    weaknessObj.take025.push(e)
  })

  // if it is in 2 and 05, they cancel each other out
  const duplicatesTake2And05 = findDuplicates([...weaknessObj.take2, ...weaknessObj.take05])
  duplicatesTake2And05.forEach(e => {
    weaknessObj.take2 = weaknessObj.take2.filter(value => value !== e)
    weaknessObj.take05 = weaknessObj.take05.filter(value => value !== e)
  })
  return weaknessObj
}
