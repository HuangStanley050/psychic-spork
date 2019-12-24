import { ActionTypes } from "./actionTypes";

export const loginStart = () => ({ type: ActionTypes.LOGIN_START });
export const loginOkay = (userInfo: {}) => ({
  type: ActionTypes.LOGIN_OKAY,
  userInfo
});
export const loginFail = (error: {}) => ({
  type: ActionTypes.LOGIN_FAIL,
  error
});
