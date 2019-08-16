import { FETCH_DETAIL } from "../actions/types";

export default (state = {}, action) => {
  if (action.type === FETCH_DETAIL) {
    return { ...state, [action.payload.name]: action.payload.data };
  }

  return state;
};
