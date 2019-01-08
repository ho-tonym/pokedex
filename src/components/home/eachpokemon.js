import React from 'react'
// {(() => { debugger; })()}

const EachPokemon = ({eachPokemon, index, children}) =>
<React.Fragment>
   <img src={children} alt={eachPokemon.name}/>
</React.Fragment>

export default EachPokemon

//on click of each pokemon, open a popup
// popup - pokemon type
