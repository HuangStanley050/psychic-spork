import { LoginActionTypes, ActionTypes } from "../actions/actionTypes";

interface Auth {
  isAuth: boolean;
  userInfo: {};
  loading: boolean;
}

const initialState: Auth = {
  isAuth: false,
  userInfo: {},
  loading: false
};

const reducer = (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case ActionTypes.LOGIN_START:
      console.log("starting login actions");
      return state;
    case ActionTypes.LOGIN_OKAY:
      console.log("login okay");
      return state;
    case ActionTypes.LOGIN_FAIL:
      console.log("login fail");
      return state;
    default:
      return state;
  }
};

export default reducer;
