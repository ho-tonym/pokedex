import React from 'react'
import List from './list'

const RecommendedList = ({ array }) => (
  <section id="bot-nav__recommended-lists">
    <List typeOfList="Recommended" array={array} />
    <List typeOfList="Best Attackers" array={array} />
    <List typeOfList="Best Defenders" array={array} />
  </section>
)

RecommendedList.defaultProps = {
  array: [],
};

export default RecommendedList
