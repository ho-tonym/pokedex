import jsonTypes from '../../../../../assets/json/types.json'
import findDuplicates from './helper/findDuplicates'

function filterList(pushToArray, dup, array) {
  dup.forEach(e => {
    array = array.filter(value => value !== e)
    pushToArray.push(e)
  })
}

export default function calculateDefence(typesArray) {

  if (typesArray.length <= 0) return

  const weaknessObj = {
    take4: [],
    take2: [],
    take05: [],
    take0: [],
    take025: [],
    all: [],
  }

  typesArray.forEach((e) => {
    weaknessObj.take2.push(...jsonTypes[e].take2)
    weaknessObj.take05.push(...jsonTypes[e].take05)
    weaknessObj.take0.push(...jsonTypes[e].take0)
  })
  if (typesArray.length === 1) return weaknessObj

  // if take0 remove it - nullifies take dmg
  weaknessObj.take0.forEach(e => {
    weaknessObj.take2 = weaknessObj.take2.filter(value => value !== e)
    weaknessObj.take05 = weaknessObj.take05.filter(value => value !== e)
  })

  // populate and remove take 4 list
  const duplicatesTake2 = findDuplicates(weaknessObj.take2)
  filterList(weaknessObj.take4, duplicatesTake2, weaknessObj.take2)
  // populate and remove take 025 list
  const duplicatesTake05 = findDuplicates(weaknessObj.take05)
  filterList(weaknessObj.take025, duplicatesTake05, weaknessObj.take05)
  // remove when in lie 2 and 05 (cancel each other out)
  const duplicatesTake2And05 = findDuplicates([...weaknessObj.take2, ...weaknessObj.take05])
  duplicatesTake2And05.forEach(e => {
    weaknessObj.take2 = weaknessObj.take2.filter(value => value !== e)
    weaknessObj.take05 = weaknessObj.take05.filter(value => value !== e)
  })
  return weaknessObj
}


// duplicatesTake2.forEach(e => {
//   weaknessObj.take2 = weaknessObj.take2.filter(value => value !== e)
//   weaknessObj.take4.push(e)
// })

// populate and remove take 025 list
// duplicatesTake05.forEach(e => {
//   weaknessObj.take05 = weaknessObj.take05.filter(value => value !== e)
//   weaknessObj.take025.push(e)
// })

// if it is in 2 and 05, they cancel each other out
