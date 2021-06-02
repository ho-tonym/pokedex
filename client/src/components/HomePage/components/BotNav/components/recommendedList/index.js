import React from 'react'
import List from '../shared/list'
import jsonTypes from '../../../../../../assets/json/types.json'

const RecommendedList = ({ defence, myPokemon, array }) => {
  return (
    <section id="bot-nav__recommended-lists">
      <List typeOfList="Best Attackers" array={array} />
      <List typeOfList="Best Defenders" array={array} />
    </section>
  )
}
export default RecommendedList
