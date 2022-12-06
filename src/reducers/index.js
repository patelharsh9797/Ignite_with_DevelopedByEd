import { combineReducers } from "redux";

// TODO Reducers
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
