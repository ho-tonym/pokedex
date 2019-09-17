import jsonTypes from '../../../json/types.json'
import findDuplicates from './helper/findDuplicates'

export function calculateDefence(takeArray, dmgString, typesArray, take4Array, take025Array) {
  if (typesArray <= 0) {
    return
  }

  let jsonArray = []
  typesArray.forEach((e) => {
    jsonArray.push(jsonTypes[e][dmgString])
  })
  jsonArray = jsonArray.flat()

  const duplicates = [...new Set(findDuplicates(jsonArray.flat()))] // all unique duplicates

  if (dmgString === "take2") {
    duplicates.forEach((e) => {
      take4Array.push(e)
    })
  } else if(dmgString === "take05") {
    duplicates.forEach((e) => {
      take025Array.push(e)
    })
  }

  duplicates.forEach((type) => {
    jsonArray = jsonArray.filter((element) => type !== element)
  })

  jsonArray.flat().map(e => (
    takeArray.push(e)
  ))
  // console.log(takeArray)
}
