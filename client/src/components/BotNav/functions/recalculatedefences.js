import findDuplicates from './helper/findDuplicates'

function reCalculateDefences(take2Array, take05Array) {
  const newArray = take05Array.concat(take2Array).flat()
  const duplicates = [...new Set(findDuplicates(newArray))]
  if (duplicates > 0) {
    duplicates.forEach(e => {
      take2Array.splice(take2Array.indexOf(e), 1)
      take05Array.splice(take05Array.indexOf(e), 1)
    })
  }
}

export default reCalculateDefences
