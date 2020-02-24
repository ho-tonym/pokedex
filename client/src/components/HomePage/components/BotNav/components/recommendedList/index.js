import React from 'react'
import List from '../shared/list'

const RecommendedList = ({ array }) => (
  <section id="bot-nav__recommended-lists">
    <List typeOfList="Recommended" array={array} />
    <List typeOfList="Best Attackers" array={array} />
    <List typeOfList="Best Defenders" array={array} />
  </section>
)

export default RecommendedList
