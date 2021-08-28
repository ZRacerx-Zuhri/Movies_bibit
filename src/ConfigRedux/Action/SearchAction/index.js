import { SEARCH_MOVIES } from "../../ActionTypes";

export const SearchMovies = (Search) => {
  return {
    type: SEARCH_MOVIES,
    payload: Search,
  };
};
