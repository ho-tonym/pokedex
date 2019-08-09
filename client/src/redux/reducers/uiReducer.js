import {
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING,
  UPDATE_MYPOKE_INPUTS,
  UPDATE_SELECTED_OPTION,
  UPDATE_MYPOKE_INPUTS_STATE,
  UPDATE_MYPOKE_INPUTS_CHECK_STATE,
  COLLAPSE_DIVS,
} from '../actions/types';

const initialState = {
  sideNav: false,

  searchFocused: false,
  searchString: "",

  myPokeInputs: { name: "", cp: "", id: "" },

  selectedOption: "add-pokemon",
  myPokeInputsFocused: { name: false, cp: false },

  showCheckMark: { name: false, cp: false },

  collapseDivs: { "collapse-1": false, "collapse-2": false, "collapse-3": false },
};

export default function (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        sideNav: action.payload,
      };
    case UPDATE_SEARCH_CSS:
      return {
        ...state,
        searchFocused: action.payload,
      };
    case UPDATE_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };
    case UPDATE_MYPOKE_INPUTS:
      return {
        ...state,
        myPokeInputs: {
          ...state.myPokeInputs, [action.payload.field]: action.payload.value },
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
    default:
      return state;
  }
}
