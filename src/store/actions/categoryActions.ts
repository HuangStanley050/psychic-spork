import { ActionTypes, AppAction } from "./actionTypes";

export const fetchCategoriesStart = () => ({
  type: ActionTypes.FETCH_CATEGORIES
});
export const fetchCategoriesOkay = data => ({
  type: ActionTypes.FETCH_CATEGORIES_OKAY,
  data
});
export const fetchCategoriesFail = error => ({
  type: ActionTypes.FETCH_CATEGORIES_FAIL,
  error
});
