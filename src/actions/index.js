import {
  SHOW_SEARCH,
  SEARCH_CONTENT,
  FETCH_FOODS,
  CURRENT_RESULT,
  CLEAR_CURRENT_RESULT
} from "./types";
import nutritionix from "../apis/nutritionix";

export const showSearch = isShow => {
  return {
    type: SHOW_SEARCH,
    payload: isShow
  };
};

export const updateSearchContent = content => {
  return {
    type: SEARCH_CONTENT,
    payload: content
  };
};

export const fetchFoods = query => async dispatch => {
  const response = await nutritionix.get(`/search/instant?query=${query}`);

  dispatch({
    type: FETCH_FOODS,
    payload: {
      name: query,
      data: response.data
    }
  });

  dispatch({
    type: CURRENT_RESULT,
    payload: query
  });
};

export const clearCurrentResult = () => {
  return {
    type: CLEAR_CURRENT_RESULT
  };
};
