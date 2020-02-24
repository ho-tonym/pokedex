import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import UIReducer from './UIReducer'

export default combineReducers({
  pokemon: pokemonReducer,
  UI: UIReducer,
});
