import React from 'react'

//on click of each pokemon -> updates the bottom nav bar with more information on clicked pokemon

const EachPokemon = ({eachPokemon, index, children}) =>
<React.Fragment>
   <img src={children} alt={eachPokemon.name}/>
</React.Fragment>

export default EachPokemon
