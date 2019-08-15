import axios from "axios";

const APP_ID = "cf2e0335";
const APP_KEY = "084eaa55e8bcea4a7608b7e702dfccad";

export default axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2",
  headers: {
    "x-app-id": APP_ID,
    "x-app-key": APP_KEY
  }
});
