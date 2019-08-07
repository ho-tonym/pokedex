import React from 'react'

const List = ({ typeOfList }) => (
  <div>
    <h1>{typeOfList}</h1>
  </div>
)

List.defaultProps = {
  typeOfList: "Pokemon List",
};

export default List
