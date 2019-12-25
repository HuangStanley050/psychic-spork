import { LoginActionTypes, ActionTypes } from "../actions/actionTypes";

interface Auth {
  isAuth: boolean;
  userInfo: {};
  loading: boolean;
  error: {};
}

const initialState: Auth = {
  isAuth: false,
  userInfo: {},
  loading: false,
  error: {}
};

const reducer = (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case ActionTypes.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.LOGIN_OKAY:
      return {
        ...state,
        loading: false,
        isAuth: true,
        userInfo: { ...action.userInfo }
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: { ...action.error }
      };
    default:
      return state;
  }
};

export default reducer;
