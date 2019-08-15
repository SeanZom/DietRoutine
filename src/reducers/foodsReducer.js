import { FETCH_FOODS } from "../actions/types";

export default (state = {}, action) => {

  if (action.type === FETCH_FOODS) {
    return { ...state, [action.payload.name]: action.payload.data };
  }

  return state;
};

