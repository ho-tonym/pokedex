import {connect} from 'react-redux'
import React, { Component } from 'react'

import {fetchOnePokemon} from '../redux/actions/pokemonActions'
import PokemonData from '../components/pokemon/pokemondata'
import WeaknessAdvantage from '../components/pokemon/weaknessadvantage'
import Lists from '../components/pokemon/lists'

import TypeImage from '../components/home/type/typeimage'
import jsonTypes from '../json/types.json'

class Pokemon extends Component {
    componentWillMount(){
      if(this.isObjectEmpty(this.props.pokeData)){
        // if(this.props.pokeData.name !== this.props.match.params.id){
        //     this.props.fetchOnePokemon(this.props.match.params.id);
            this.props.fetchOnePokemon("pikachu");
          // }
      }
    }
    isObjectEmpty = (Obj) => {
      for(let key in Obj) {
        if(Obj.hasOwnProperty(key))
          return false;
        }
      return true;
    }

    colorPicker(type){
      switch(type) {
        case 'normal':
          return "#bcbcac";
        case 'poison':
          return "#aa5da0";
        case 'psychic':
          return "#fa65b4";
        case 'grass':
          return "#8bd54f";
        case 'ground':
          return "#f0cf5d";
        case 'ice':
          return "#a0f6ff";
        case 'fire':
          return "#f75344";
        case 'rock':
          return "#c8b873";
        case 'dragon':
          return "#8976ff";
        case 'water':
          return "#57afff";
        case 'bug':
          return "#c2d120";
        case 'dark':
          return "#805f4f";
        case 'fighting':
          return "#a45545";
        case 'ghost':
          return "#7570cb";
        case 'steel':
          return "#c3c1d6";
        case 'flying':
          return "#77a3ff";
        case 'electric':
          return "#fee63b";
        case 'fairy':
          return "#fbaeff";
        default:
          return "#fff";
        }
    }

    createTypesButtons = (typeImages, typesArray) => {
      if (!this.isObjectEmpty(this.props.pokeData)){
        this.props.pokeData.types.map((e, index) => {
          typesArray.push(e.type.name)
          return(
            typeImages.push(
              <TypeImage key={index} type={e.type.name} color={this.colorPicker(e.type.name)}/>
            )
          )
        })
      }
    }
    calculateDefence(typesArray, finalArray , dmgString){
      let jsonArray = [];
      typesArray.forEach((e) => {
        jsonArray.push(jsonTypes[e][dmgString])
      })

      jsonArray.flat().map((e, index) => {
        finalArray.push(
          <TypeImage key={index} type={e} color={this.colorPicker(e)}/>
        )
        return null;
      })
    }

    render() {
      let typesArray = [];
      let typeImages = [];
      this.createTypesButtons(typeImages, typesArray);

      let take2 = [];
      this.calculateDefence(typesArray, take2, "take2");
      let take05 = [];
      this.calculateDefence(typesArray, take05, "take05");
      let take0 = [];
      this.calculateDefence(typesArray, take0, "take0");

      let array = ["pikachu", "bulbasaur"]
    return (
      <div className="selectedPokemon">
        <PokemonData pokeData={this.props.pokeData} isObjectEmpty={this.isObjectEmpty} typeImages={typeImages}/>
        {typeImages.length &&
          <React.Fragment>
            <WeaknessAdvantage take2={take2} take05={take05} take0={take0}/>
            <Lists array={array}/>
          </React.Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokeData: state.pokemon.fetchOnePokemon
  }
}
const mapDispatchToProps = {
  fetchOnePokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
