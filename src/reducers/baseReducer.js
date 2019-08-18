import _ from "lodash";
import {
  SHOW_SEARCH,
  CURRENT_RESULT,
  CLEAR_CURRENT_RESULT,
  LOADING,
  OPEN_DIALOG,
  SELECTED_FOOD,
  SELECTED_DATE
} from "../actions/types";
import { getTheDateBefore } from "../utils/dateutil";

const dates = [getTheDateBefore(2), "Yesterday", "Today"];

const getSelectedDate = (lastSelectedDate, operation) => {
  let current = dates.indexOf(lastSelectedDate);
  if (operation === "next") {
    current += 1;
  } else {
    current -= 1;
  }

  if (current === 3) {
    current = 0;
  } else if (current === -1) {
    current = 2;
  }

  return dates[current];
};

const initialBase = {
  selectedDate: dates[2],
}

export default (state = initialBase, action) => {
  switch (action.type) {
    case SHOW_SEARCH:
      return { ...state, showSearch: action.payload };
    case CURRENT_RESULT:
      return { ...state, currentResult: action.payload };
    case CLEAR_CURRENT_RESULT:
      return _.omit(state, "currentResult");
    case LOADING:
      return { ...state, isLoading: action.payload };
    case OPEN_DIALOG:
      return { ...state, isOpenDialog: action.payload };
    case SELECTED_FOOD:
      return { ...state, selectedFood: action.payload };
    case SELECTED_DATE:
      const newSelectedDate = getSelectedDate(state.selectedDate, action.payload);
      return { ...state, selectedDate: newSelectedDate };
    default:
      return state;
  }
};
