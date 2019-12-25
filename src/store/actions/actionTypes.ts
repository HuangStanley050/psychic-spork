export enum ActionTypes {
  LOGIN_START = "LOGIN_START",
  LOGIN_OKAY = "LOGIN_OKAY",
  LOGIN_FAIL = "LOGIN_FAIL"
}

export interface LoginStartAction {
  type: ActionTypes.LOGIN_START;
  userInfo: {
    email: string;
    password: string;
  };
}

export interface LoginOkayAction {
  type: ActionTypes.LOGIN_OKAY;
  userInfo: {};
}

export interface LoginFailAction {
  type: ActionTypes.LOGIN_FAIL;
  error: {};
}

export type LoginActionTypes =
  | LoginStartAction
  | LoginOkayAction
  | LoginFailAction;

export type AppAction = LoginActionTypes;
