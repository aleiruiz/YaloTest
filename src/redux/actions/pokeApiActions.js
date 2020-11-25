import * as types from "../constants/actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { getPokemonData } from "../../api/PokeApi";

export function actionLoadPokemon(selectedPokemon) {
  return { type: types.LOAD_POKEMON, selectedPokemon };
}

export function LikedPokemon(pokemon) {
  return { type: types.LIKED_POKEMON, pokemon };
}

export function DislikedPokemon(pokemon) {
  return { type: types.DISLIKED_POKEMON, pokemon };
}

export function apiGetPokemon(pokemon) {
  return function (dispatch) {
    dispatch(beginApiCall);
    return getPokemonData(pokemon)
      .then((selectedPokemon) =>
        dispatch(actionLoadPokemon({ ...selectedPokemon, status: 200 }))
      )
      .catch((err) => {
        dispatch(apiCallError(err));
        actionLoadPokemon({ status: 404 });
      });
  };
}
