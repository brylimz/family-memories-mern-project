import * as api from "../api";

// Action Creators

const getPosts = () => async (dispatch) => {
  const action = { type: "FETCH ALL", payload: [] };
  dispatch(action);
};
