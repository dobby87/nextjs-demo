import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

// sagas
import demoSaga from "./demo/saga";

// reducers
import demo from "./demo/ducks";

const rootReducer = combineReducers({
  demo
});

function* rootSaga() {
  yield all([, demoSaga()]);
}

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );

  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
