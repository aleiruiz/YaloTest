import * as types from "../constants/actionTypes";
import StateLoader from "../StateLoader";
import initialState from "./initialState";

export default function businessReducer(
  state = initialState.likedPokemon,
  action
) {
  var selectedPokemon = action.pokemon;
  var pokemonLiked = [];
  switch (action.type) {
    case types.LIKED_POKEMON:
      pokemonLiked = { ...state, selectedPokemon };
      StateLoader.saveState(pokemonLiked);
      return pokemonLiked;
    case types.DISLIKED_POKEMON:
      pokemonLiked = state.filter((x) => x.id !== selectedPokemon.id);
      StateLoader.saveState(pokemonLiked);
      return pokemonLiked;
    default:
      return state;
  }
}
