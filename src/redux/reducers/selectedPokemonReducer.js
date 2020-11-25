import * as types from "../constants/actionTypes";
import initialState from "./initialState";

export default function businessReducer(
  state = initialState.selectedPokemon,
  action
) {
  switch (action.type) {
    case types.LOAD_POKEMON:
      return action.selectedPokemon;
    default:
      return state;
  }
}
