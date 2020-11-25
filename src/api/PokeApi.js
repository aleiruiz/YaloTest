import Api from "./ApiService";
import { handleError, handleResponse } from "./apiUtils";

export const getPokemonData = async (pokemon) => {
  try {
    let response = await Api.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    return handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};
