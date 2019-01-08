import React from 'react'
import List from './list'

const Lists = ({array}) => {
  return(
    <section id="lists">
      <List typeOfList={"Recommended"} array={array}/>
      <List typeOfList={"Best Attackers"} array={array}/>
      <List typeOfList={"Best Defenders"} array={array}/>
    </section>
  )
}
export default Lists
