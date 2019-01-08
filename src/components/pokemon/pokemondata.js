import React from 'react'

const PokemonData = ({pokeData, isObjectEmpty}) => {
  let statsName = [];
  let statsValue = []
  let pokedata;

  if (isObjectEmpty(pokeData)){
    pokedata =
     <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
  }
  else{
    pokeData.stats.map((e, index) =>{
      statsName.push(<th key={e.stat.name + index}>{e.stat.name}</th>)
      statsValue.push(<th key={e.base_stat + index}>{e.base_stat}</th>)
        return null
    })

    pokedata = <section id="pokeData">
      <div id="pokeDataStats">
        <table>
          <thead>
            <tr>
              <th>height</th>
              <th>weight</th>
              <th>exp</th>
              {statsName}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{pokeData.height}</th>
              <th>{pokeData.weight}</th>
              <th>{pokeData.base_experience}</th>
              {statsValue}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  }
  return(
    <React.Fragment>
      {pokedata}
    </React.Fragment>)
}

export default PokemonData
