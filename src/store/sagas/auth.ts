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
  data: {
    jwt: string;
    user: {};
  };
}

interface loginError {
  statusCode: number;
  message: [];
}

export default function* AuthSagaWatcher() {
  yield takeEvery(ActionTypes.LOGIN_START, LoginSagaWorker);
}

function* LoginSagaWorker(action: {
  type: string;
  userInfo: { email: string; password: string };
}) {
  let result: UserInfo;
  let token = "";
  let userInfo: {};
  let error: loginError;
  const { email, password } = action.userInfo;
  try {
    result = yield axios.post(API.login, { identifier: email, password });
    token = result.data.jwt;
    userInfo = result.data.user;
    yield localStorage.setItem("bookmarkApp", token);
    yield put(loginOkay(userInfo));
  } catch (err) {
    error = {
      statusCode: err.response.data.statusCode,
      message: err.response.data.message
    };
    yield put(loginFail(error));
    //console.log(error);
  }
}
