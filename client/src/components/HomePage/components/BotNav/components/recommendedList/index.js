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
// based on onePokemonData,
// look at myPokemon figure out those that have 2x, 4x AND 0.5, 0.25 then highest cp
// 623bb19b-f39a-4615-949f-5cdd24350a27
