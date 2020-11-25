import initialState from "./reducers/initialState";

export default class StateLoader {
  loadState() {
    try {
      let serializedState = localStorage.getItem("LikedPokemon");
      if (serializedState === null) {
        return this.initializeState();
      }
      return this.initialState(JSON.parse(serializedState));
    } catch (err) {
      return this.initializeState();
    }
  }

  saveState(state) {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("LikedPokemon", serializedState);
    } catch (err) {
      console.log(err);
    }
  }

  initialState(likedPokemon) {
    initialState.likedPokemon = likedPokemon;
    return initialState;
  }

  initializeState() {
    return initialState;
  }
}
