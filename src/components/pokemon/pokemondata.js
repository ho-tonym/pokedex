import React from 'react';

// Specific Pokemondata - After Types
const PokemonData = ({ pokeData, isObjectEmpty }) => {
  const statsName = [];
  const statsValue = [];
  let pokedata;

  if (isObjectEmpty(pokeData)) {
    pokedata = (
      <div className="loader">
        <span />
        <span />
        <span />
      </div>
    );
  } else {
    pokeData.stats.map((e) => {
      statsName.push(<th key={e.stat.name + e.base_stat}>{e.stat.name}</th>);
      statsValue.push(<th key={e.base_stat + e.base_stat}>{e.base_stat}</th>);
      return null;
    });

    pokedata = (
      <section id="bot-nav__poke-data">
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
      </section>
    );
  }
  return (
    <>
      {pokedata}
    </>
  );
};

export default PokemonData;
