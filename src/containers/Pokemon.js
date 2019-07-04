import React, { Component } from 'react'
import PokemonData from '../components/pokemon/pokemondata'
import WeaknessAdvantage from '../components/pokemon/weaknessadvantage'
import TypeImage from '../components/home/type/typeimage'

import {connect} from 'react-redux'
import {fetchOnePokemon} from '../redux/actions/pokemonActions'

import jsonTypes from '../json/types.json'
import typeImagesImport from '../images/typeImages';

class Pokemon extends Component {
    //if bottom data is empty, we will display pickachu data as default
    componentWillMount(){
      if(this.isObjectEmpty(this.props.pokeData)){
          this.props.fetchOnePokemon("pikachu");
      }
      document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount = () => {
      document.removeEventListener('mousedown', this.handleClick, false)
    }

    shouldComponentUpdate = (nextProps, nextState) => {
      return true
    }

    //expand bottom nav bar
    expandOnePokemon = () => {
      if (this.pokemonType.style.transform === "translateY(70px)"){
        this.pokemonType.style.transform = "translateY(100%)"
      }
      else{
        this.pokemonType.style.transform = "translateY(70px)"
      }
    }

    //contract bottom nav bar
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

    //change color of tag based on pokemon type
    colorPicker(type){
      switch(type) {
        case 'normal':
          return{
            color: "#bcbcac",
            img: typeImagesImport.normal
          }
        case 'poison':
          return{
            color: "#aa5da0",
            img: typeImagesImport.poison
          }
        case 'psychic':
          return{
            color: "#fa65b4",
            img: typeImagesImport.psychic
          }
        case 'grass':
          return{
            color: "#8bd54f",
            img: typeImagesImport.grass
          }
        case 'ground':
          return{
            color: "#f0cf5d",
            img: typeImagesImport.ground
          }
        case 'ice':
          return{
            color: "#a0f6ff",
            img: typeImagesImport.ice
          }
        case 'fire':
          return{
            color: "#f75344",
            img: typeImagesImport.fire
          }
        case 'rock':
          return{
            color: "#c8b873",
            img: typeImagesImport.rock
          }
        case 'dragon':
          return{
            color: "#8976ff",
            img: typeImagesImport.dragon
          }
        case 'water':
          return{
            color: "#57afff",
            img: typeImagesImport.water
          }
        case 'bug':
          return{
            color: "#c2d120",
            img: typeImagesImport.bug
          }
        case 'dark':
          return{
            color: "#805f4f",
            img: typeImagesImport.dark
          }
        case 'fighting':
          return{
            color: "#a45545",
            img: typeImagesImport.fighting
          }
        case 'ghost':
          return{
            color: "#7570cb",
            img: typeImagesImport.ghost
          }
        case 'steel':
          return{
            color: "#c3c1d6",
            img: typeImagesImport.steel
          }
        case 'flying':
          return{
            color: "#77a3ff",
            img: typeImagesImport.flying
          }
        case 'electric':
          return{
            color: "#fee63b",
            img: typeImagesImport.electric
          }
        case 'fairy':
          return{
            color: "#fbaeff",
            img: typeImagesImport.fairy
          }
        default:
          return{
            color: "#fff",
            img: typeImagesImport.electric
          }
        }
    }

//create type componenets for bottom nav when a pokemon is clicked on
    createTypesButtons = (typeImages, typesArray) => {
      if (!this.isObjectEmpty(this.props.pokeData)){
        this.props.pokeData.types.map((e, index) => {
          typesArray.push(e.type.name)
          return(
            typeImages.push(
              <TypeImage key={index} type={e.type.name} colorImg={this.colorPicker(e.type.name)}/>
            )
          )
        })
      }
    }

    //determine the weaknesses and strengths for each type
    calculateDefence(typesArray, finalArray , dmgString){
      let jsonArray = [];
      typesArray.forEach((e) => {
        jsonArray.push(jsonTypes[e][dmgString])
      })

      jsonArray.flat().map((e, index) => {
        finalArray.push(
          <TypeImage key={index} type={e} colorImg={this.colorPicker(e)}/>
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
      <div className="selectedPokemon" ref={(pokemonType)=>{this.pokemonType = pokemonType}}>
        <button id="pokemonTypeButton" onClick={this.expandOnePokemon}>
          {typeImages}
        </button>
        <h1 className="capitalize">{this.props.pokeData.name} Stats</h1>
        {typeImages.length &&
          <React.Fragment>
            <WeaknessAdvantage take2={take2} take05={take05} take0={take0}/>
          </React.Fragment>
        }

        <PokemonData pokeData={this.props.pokeData} isObjectEmpty={this.isObjectEmpty} typeImages={typeImages}/>
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
