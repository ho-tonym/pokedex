import React from 'react'
const List = ({typeOfList, array}) => {
  let listItems = array.map((e, index) => {
    return(
      <p key={index}>{e}</p>
    )
  })
  return(
    <div className="recommendedList" id={typeOfList}>
      <h3>{typeOfList}</h3>
        {listItems}
    </div>
  )
}
export default List
