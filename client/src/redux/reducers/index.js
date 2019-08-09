import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
});
