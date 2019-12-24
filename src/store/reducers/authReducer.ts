import { LoginActionTypes } from "../actions/actionTypes";

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
  return state;
};

export default reducer;
