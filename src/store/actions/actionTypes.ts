export enum ActionTypes {
  LOGIN_START = "LOGIN_START",
  LOGIN_OKAY = "LOGIN_OKAY",
  LOGIN_FAIL = "LOGIN_FAIL",
  FETCH_BOOKMARKS = "FETCH_BOOKMARKS",
  FETCH_BOOKMARKS_OKAY = "FETCH_BOOKMARKS_OKAY",
  FETCH_BOOKMARKS_FAIL = "FETCH_BOOKMARKS_FAIL"
}

export interface BookMarksFetchStartAction {
  type: ActionTypes.FETCH_BOOKMARKS;
}

export interface BookMarksFetchOkayction {
  type: ActionTypes.FETCH_BOOKMARKS_OKAY;
  data: {};
}

export interface BookMarksFetchFailAction {
  type: ActionTypes.FETCH_BOOKMARKS_FAIL;
  error: {};
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

export type BookMarksActionTypes =
  | BookMarksFetchOkayction
  | BookMarksFetchStartAction
  | BookMarksFetchFailAction;

export type AppAction = LoginActionTypes | BookMarksActionTypes;
