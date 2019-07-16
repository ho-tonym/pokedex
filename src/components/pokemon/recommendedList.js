import React from 'react';
import List from './list';

const RecommendedList = ({array}) => {
  return(
    <section id="bot-nav__recommended-lists">
      <List typeOfList={"Recommended"} array={array} />
      <List typeOfList={"Best Attackers"} array={array} />
      <List typeOfList={"Best Defenders"} array={array} />
    </section>
  )
};

export default RecommendedList;
