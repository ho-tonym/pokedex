import React from 'react'
import uuid from 'uuid'
import EachPokemon from '../../../../general/EachPokemon'
import TypeImage from '../../../../general/typeimage'
import jsonTypes from '../../../../../assets/json/types.json'
import typeImagesImport from '../../../../../assets/images/typeImages'

const EachMyPokemon = ({ eachPokemon, cp, id, types }) => (
  <>
    <button id={eachPokemon} type="button">
      <EachPokemon eachPokemon={eachPokemon}>
        {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      </EachPokemon>
      <h3>{eachPokemon}</h3>
      <h3>{cp}</h3>
      <div className="types">
        {types.map(name => (
          <TypeImage
            classname="my-pokemon-type-image"
            key={uuid.v4()}
            type={name}
            color={jsonTypes[name].color}
            img={typeImagesImport[name]}
          />
        ))}
      </div>
    </button>
  </>
)

EachMyPokemon.defaultProps = {

};

export default EachMyPokemon
