import { ActionTypes, AppAction } from "./actionTypes";

export const bookMarkStart = () => ({ type: ActionTypes.FETCH_BOOKMARKS });
export const bookMarkOkay = data => ({
  type: ActionTypes.FETCH_BOOKMARKS_OKAY,
  data
});
export const bookMarkFail = error => ({
  type: ActionTypes.FETCH_BOOKMARKS_FAIL,
  error
});
