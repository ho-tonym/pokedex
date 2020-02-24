import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  UPDATE_MY_POKEMON,
  FETCH_ONE_POKEMON,
  NO_MORE_POKEMON,
  FETCHING,
  UPDATE_MYPOKE_INPUTS,
  SEND_TO_BACKEND,
  UPDATE_MYPOKE_INPUTS_STATE,
  UPDATE_MYPOKE_INPUTS_CHECK_STATE,
  GET_FROM_BACKEND,
} from '../actions/types';

const initialState = {
  pokemon: [],
  pokemonNames: [],
  filteredPokemon: [],
  myPokemon: [],
  onePokemonData: {},

  apiHasMore: true,
  isFetching: false,

  myPokeInputs: { name: "", cp: "", id: "" },
  id: "",

  myPokeInputsFocused: { name: false, cp: false },
  showCheckMark: { name: false, cp: false },

  typeImages: {
    type: [],
    take4: [],
    take2: [],
    take05: [],
    take025: [],
    take0: [],
  },
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.concat(action.payload),
        filteredPokemon: state.pokemon.concat(action.payload),
        isFetching: false,
      };

    case FETCH_ONE_POKEMON:
      return {
        ...state,
        onePokemonData: action.payload,
        isFetching: false,
      };

    case FILTER_POKEMON:
      return {
        ...state,
        filteredPokemon: action.payload,
      };

    case UPDATE_MY_POKEMON:
      return {
        ...state,
        myPokemon: state.myPokemon.concat(action.payload),
        isFetching: false,
      };
    case GET_FROM_BACKEND:
      return {
        ...state,
        myPokemon: action.payload,
        isFetching: false,
      };
    case NO_MORE_POKEMON:
      return {
        ...state,
        apiHasMore: action.payload,
      };
    case FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case UPDATE_MYPOKE_INPUTS:
      return {
        ...state,
        myPokeInputs: {
          ...state.myPokeInputs, [action.payload.field]: action.payload.value },
      };
    case SEND_TO_BACKEND:
      return {
        ...state,
        id: action.payload,
      };
    case UPDATE_MYPOKE_INPUTS_STATE:
      return {
        ...state,
        myPokeInputsFocused: {
          ...state.myPokeInputsFocused, [action.payload.field]: action.payload.bool },
      };
    case UPDATE_MYPOKE_INPUTS_CHECK_STATE:
      return {
        ...state,
        showCheckMark: {
          ...state.showCheckMark, [action.payload.field]: action.payload.bool },
      };
    default:
      return state;
  }
}
