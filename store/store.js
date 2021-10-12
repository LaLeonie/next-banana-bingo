import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./user";
import { gameReducer } from "./game";

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
