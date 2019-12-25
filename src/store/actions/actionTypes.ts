export enum ActionTypes {
  LOGIN_START = "LOGIN_START",
  LOGIN_OKAY = "LOGIN_OKAY",
  LOGIN_FAIL = "LOGIN_FAIL",
  FETCH_BOOKMARKS = "FETCH_BOOKMARKS",
  FETCH_BOOKMARKS_OKAY = "FETCH_BOOKMARKS_OKAY",
  FETCH_BOOKMARKS_FAIL = "FETCH_BOOKMARKS_FAIL",
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_CATEGORIES_OKAY = "FETCH_CATEGORIES_OKAY",
  FETCH_CATEGORIES_FAIL = "FETCH_CATEGORIES_FAIL"
}

export interface CategoryFetchStartAction {
  type: ActionTypes.FETCH_CATEGORIES;
}

export interface CategoryFetchOkayAction {
  type: ActionTypes.FETCH_CATEGORIES;
  data: {};
}

export interface CategoryFetchFailAction {
  type: ActionTypes.FETCH_CATEGORIES_FAIL;
  error: {};
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

export type CategoryActionTypes =
  | CategoryFetchOkayAction
  | CategoryFetchStartAction
  | CategoryFetchFailAction;

export type AppAction =
  | LoginActionTypes
  | BookMarksActionTypes
  | CategoryActionTypes;
