import React from 'react'

const EachPokemon = ({ eachPokemon, children }) => (
  <>
    <img src={children} alt={eachPokemon.name} />
  </>
)

export default EachPokemon
