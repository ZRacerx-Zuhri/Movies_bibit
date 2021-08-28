import axios from "../../../Services";
import {
  FAILED_GET_DATA_MOVIES,
  GET_DATA_MOVIES,
  SUCCESS_GET_DATA_MOVIES,
} from "../../ActionTypes";

export const GetMoviesList = (Search, Type, Key, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_DATA_MOVIES });
      let Result = await axios.get("/", {
        params: {
          apikey: Key,
          s: Search,
          t: Type,
          page,
        },
      });
      if (!Result.data.Response) {
        dispatch({
          type: FAILED_GET_DATA_MOVIES,
          payload: Result.data.Error,
        });
      } else {
        dispatch({
          type: SUCCESS_GET_DATA_MOVIES,
          payload: Result.data,
        });
      }
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: FAILED_GET_DATA_MOVIES,
        payload: error.response.data.Error,
      });
    }
  };
};
