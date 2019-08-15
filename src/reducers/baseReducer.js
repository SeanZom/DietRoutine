import _ from "lodash";
import {
  SHOW_SEARCH,
  SEARCH_CONTENT,
  CURRENT_RESULT,
  CLEAR_CURRENT_RESULT
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_SEARCH:
      return { ...state, showSearch: action.payload };
    case SEARCH_CONTENT:
      return { ...state, searchContent: action.payload };
    case CURRENT_RESULT:
      return { ...state, currentResult: action.payload };
    case CLEAR_CURRENT_RESULT:
      return _.omit(state, 'currentResult');
    default:
      return state;
  }
};
