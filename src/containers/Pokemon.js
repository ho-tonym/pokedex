import {connect} from 'react-redux'
import React, { Component } from 'react'

import {fetchOnePokemon} from '../redux/actions/pokemonActions'
import PokemonData from '../components/pokemon/pokemondata'
import WeaknessAdvantage from '../components/pokemon/weaknessAdvantage'
// import Lists from '../components/pokemon/lists'

import TypeImage from '../components/home/type/typeimage'
import jsonTypes from '../json/types.json'
import typeImagesImport from '../images/typeImages';

class Pokemon2 extends Component {
    // <Lists array={array}/>
    // let array = ["pikachu", "bulbasaur"]
    componentWillMount() {
      if(this.isObjectEmpty(this.props.pokeData)){
          this.props.fetchOnePokemon("pikachu");
      }
      document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount = () => {
      document.removeEventListener('mousedown', this.handleClick, false)
    }

    shouldComponentUpdate = (nextProps, nextState) => {
    //   if (typeImages > 0 && typeImages)
    // }
      // debugger
      return true
    }

    expandOnePokemon = () => {
      if (this.pokemonType.style.transform === "translateY(70px)"){
        this.pokemonType.style.transform = "translateY(100%)"
      }else{
        this.pokemonType.style.transform = "translateY(70px)"
      }
    }

    closeOnePokemon = () => {
      this.pokemonType.style.transform = "translateY(100%)"
    }

    handleClick = (e) => {
      if (this.pokemonType.contains(e.target)){
        return;
      }
      else{
        this.closeOnePokemon();
      }
    }

    isObjectEmpty = (Obj) => {
      for(let key in Obj) {
        if(Obj.hasOwnProperty(key))
          return false;
        }
      return true;
    }

    createTypesButtons = (typeImages, typesArray) => {
      if (!this.isObjectEmpty(this.props.pokeData)) {
        this.props.pokeData.types.map((e, index) => {
          typesArray.push(e.type.name)
          return(
            typeImages.push(
              <TypeImage
                key={index}
                type={e.type.name}
                color={jsonTypes[e.type.name].color}
                img={typeImagesImport[e.type.name]}
              />
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
          <TypeImage
            key={index}
            type={e}
            color={jsonTypes[e].color}
            img={typeImagesImport[e]}
          />
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


    return (
      <div className="selectedPokemonContainer" ref={(pokemonType) => {this.pokemonType = pokemonType; }}>
        <button id="pokemonTypeButton" type="button" onClick={this.expandOnePokemon}>
          {typeImages}
        </button>
        <div className="scrollable">
          <h1 className="capitalize">{this.props.pokeData.name}
            Stats
          </h1>
          {typeImages.length &&
            <>
              <WeaknessAdvantage take2={take2} take05={take05} take0={take0}/>
            </>
          }
          <PokemonData pokeData={this.props.pokeData} isObjectEmpty={this.isObjectEmpty} typeImages={typeImages}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon2)
