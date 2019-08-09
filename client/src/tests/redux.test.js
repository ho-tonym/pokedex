import {
  ERRORS,
} from  '../redux/actions/types'

import pokemonReducer from '../redux/reducers/pokemonReducer'
import uiReducer from '../redux/reducers/uiReducer'

describe('Reducer', () => {
  it('pokemon reducer returns default state', () => {
    const newState = pokemonReducer(undefined, {})
    expect(newState).toEqual({
      pokemon: [],
      pokemonNames: [],
      filteredPokemon: [],
      myPokemon: [],
      onePokemonData: {},

      apiHasMore: true,
      isFetching: false,

      id: "",
      errors: "",
    });
  })

  it('ui rededucer returns default state', () => {
    const newState = uiReducer(undefined, {})
    expect(newState).toEqual({
      sideNav: false,

      searchFocused: false,
      searchString: "",

      myPokeInputs: { name: "", cp: "", id: "" },

      selectedOption: "add-pokemon",
      myPokeInputsFocused: { name: false, cp: false },

      showCheckMark: { name: false, cp: false },

      collapseDivs: { "collapse-1": false, "collapse-2": false, "collapse-3": false },
    });
  })

  it('state should be updated based on type received', () => {
    const error = "new test error"
    const newState = pokemonReducer(undefined, {
      type: ERRORS,
      payload: error,
    })
    expect(newState.errors).toEqual(error)
  })
})
