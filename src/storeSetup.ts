import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import authReducer from "./store/reducers/authReducer";
import dataReducer from "./store/reducers/dataReducer";
import rootSaga from "./store/sagas";

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
