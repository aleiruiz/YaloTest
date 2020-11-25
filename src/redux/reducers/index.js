import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import likedPokemon from "./likedPokemonReducer";
import selectedPokemon from "./selectedPokemonReducer";

const rootReducer = combineReducers({
  likedPokemon,
  apiCallsInProgress,
  selectedPokemon,
});

export default rootReducer;
