import {
  GET_DATA_MOVIES,
  FAILED_GET_DATA_MOVIES,
  SUCCESS_GET_DATA_MOVIES,
} from "../../ActionTypes";
const initial_state = {
  Fetching: false,
  Failed: false,
  Success: false,
  data: null,
};

const Get_Movies = (state, action) => {
  return {
    ...state,
    Fetching: true,
    Failed: false,
    Success: false,
    data: null,
  };
};

const Failed_Get_Movies = (state, action) => {
  return {
    ...state,
    Fetching: false,
    Failed: true,
    Success: false,
    data: action.payload,
  };
};

const Success_Get_Movies = (state, action) => {
  return {
    ...state,
    Fetching: false,
    Failed: false,
    Success: true,
    data: action.payload,
  };
};

const Movies_List = (state = initial_state, action) => {
  switch (action.type) {
    case GET_DATA_MOVIES:
      return Get_Movies(state, action);
    case FAILED_GET_DATA_MOVIES:
      return Failed_Get_Movies(state, action);
    case SUCCESS_GET_DATA_MOVIES:
      return Success_Get_Movies(state, action);
    default:
      return state;
  }
};

export default Movies_List;
