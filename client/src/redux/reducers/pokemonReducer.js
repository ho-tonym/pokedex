import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  UPDATE_MY_POKEMON,
  FETCH_ONE_POKEMON,
  NO_MORE_POKEMON,
  FETCHING,
  SEND_TO_BACKEND,
  GET_FROM_BACKEND,
  ERRORS,

  UPDATE_MYPOKE_INPUTS,
  UPDATE_SELECTED_OPTION,
  UPDATE_MYPOKE_INPUTS_STATE,
  UPDATE_MYPOKE_INPUTS_CHECK_STATE,
  COLLAPSE_DIVS,
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
  selectedOption: "add-pokemon",

  myPokeInputsFocused: { name: false, cp: false },
  showCheckMark: { name: false, cp: false },

  errors: "",

  collapseDivs: { "collapse-1": false, "collapse-2": false, "collapse-3": false },
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.concat(action.payload),
        filteredPokemon: state.filteredPokemon.concat(action.payload),
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
        isFetching: false,
      };
    case UPDATE_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
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
    case COLLAPSE_DIVS:
      return {
        ...state,
        collapseDivs: {
          ...state.collapseDivs, [action.id]: !state.collapseDivs[action.id] },
      };
    case ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
