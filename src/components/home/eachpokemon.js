

import React from 'react'

const EachPokemon = ({ name, children }) => (
  <>
    <img src={children} alt={name} />
  </>
)

export default EachPokemon
