import { combineReducers } from "redux";
import Movies_List from "./ReducerGetMovies";
import Search_Movies from "./ReducerSearch";

const RootReducer = combineReducers({
  Movies_List,
  Search_Movies,
});

export default RootReducer;
