import {
  SHOW_SEARCH,
  FETCH_FOODS,
  FETCH_DETAIL,
  CURRENT_RESULT,
  CLEAR_CURRENT_RESULT,
  LOADING,
  OPEN_DIALOG,
  SELECTED_FOOD,
  SELECTED_DATE,
  ADD_TO_INTAKE
} from "./types";
import nutritionix from "../apis/nutritionix";

export const showSearch = isShow => {
  return {
    type: SHOW_SEARCH,
    payload: isShow
  };
};

export const fetchFoods = query => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  const response = await nutritionix.get(`/search/instant?query=${query}`);

  dispatch({
    type: LOADING,
    payload: false
  });

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

export const fetchCommonDetail = query => async dispatch => {
  const response = await nutritionix.post("/natural/nutrients", { query });

  dispatch({
    type: FETCH_DETAIL,
    payload: {
      name: query,
      data: response.data.foods[0]
    }
  });
};

export const fetchBrandedDetail = itemId => async dispatch => {
  const response = await nutritionix.get(`/search/item?nix_item_id=${itemId}`);

  dispatch({
    type: FETCH_DETAIL,
    payload: {
      name: itemId,
      data: response.data.foods[0]
    }
  });
};

export const clearCurrentResult = () => {
  return {
    type: CLEAR_CURRENT_RESULT
  };
};

export const setLoading = loading => {
  return {
    type: LOADING,
    payload: loading
  };
};

export const setOpenDialog = isOpen => {
  return {
    type: OPEN_DIALOG,
    payload: isOpen
  };
};

export const setSelectedFood = food => {
  return {
    type: SELECTED_FOOD,
    payload: food
  };
};

export const setSelectedDate = date => {
  return {
    type: SELECTED_DATE,
    payload: date
  };
};

export const addToIntake = food => {
  return {
    type: ADD_TO_INTAKE,
    payload: food
  };
};

