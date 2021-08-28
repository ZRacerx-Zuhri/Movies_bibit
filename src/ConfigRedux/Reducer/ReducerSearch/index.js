import { SEARCH_MOVIES } from "../../ActionTypes";
const initial_state = {
  data: null,
};

const Search = (state, action) => {
  return {
    ...state,
    data: action.payload,
  };
};

const Search_Movies = (state = initial_state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return Search(state, action);
    default:
      return state;
  }
};

export default Search_Movies;
