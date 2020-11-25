import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import StateLoader from "./StateLoader";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore() {
  let loader = new StateLoader();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support to redux dev tools
  return createStore(
    rootReducer,
    loader.loadState(),
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
