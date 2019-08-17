import { combineReducers } from "redux";

import foodsReducer from "./foodsReducer";
import detailsReducer from "./detailsReducer";
import baseReducer from "./baseReducer";
import dietReducer from "./dietReducer";

export default combineReducers({
  foods: foodsReducer,
  details: detailsReducer,
  base: baseReducer,
  diet: dietReducer
});
