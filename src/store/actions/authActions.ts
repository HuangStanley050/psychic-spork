import { ActionTypes, AppAction } from "./actionTypes";

export const loginStart = (userInfo: {
  email: string;
  password: string;
}): AppAction => ({
  type: ActionTypes.LOGIN_START,
  userInfo
});
export const loginOkay = (userInfo: {}): AppAction => ({
  type: ActionTypes.LOGIN_OKAY,
  userInfo
});
export const loginFail = (error: {}): AppAction => ({
  type: ActionTypes.LOGIN_FAIL,
  error
});
