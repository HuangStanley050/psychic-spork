import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  ActionTypes,
  AppAction,
  LoginActionTypes
} from "../actions/actionTypes";
import { loginFail, loginOkay } from "../actions/authActions";
import API from "../../api";

interface UserInfo {
  jwt: string;
  user: {};
}

export default function* AuthSagaWatcher() {
  yield takeEvery(ActionTypes.LOGIN_START, LoginSagaWorker);
}

function* LoginSagaWorker(action: {
  type: string;
  userInfo: { email: string; password: string };
}) {
  let result: UserInfo;

  const { email, password } = action.userInfo;
  try {
    result = yield axios.post(API.login, { identifier: email, password });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
