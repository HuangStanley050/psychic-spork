import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "./store/reducers/authReducer";
import dataReducer from "./store/reducers/dataReducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer
  // error: errorReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer
  //composeEnhancers(applyMiddleware(sagaMiddleware))
);
//sagaMiddleware.run(rootSaga);
export default store;
