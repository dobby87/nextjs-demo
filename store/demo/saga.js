import { DEMO_SAGA_ACTION, DEMO_SAGA_ASYNC_ACTION } from "./types";
import {
  all,
  // call,
  put,
  takeEvery,
  // takeLatest,
  delay
} from "redux-saga/effects";
// import axios from "axios";

function* getDemoSaga(action) {
  try {
    console.log("b");
    // call api
    yield delay(3000);
    // put action
    yield put({
      type: DEMO_SAGA_ASYNC_ACTION,
      payload: "demo saga activated"
    });
  } catch (e) {
    // error log
    console.error(e);
    // error action
    // yield put({ type: GET_TODOS_FAILED });
  }
}

// watcher
function* actionWatcher() {
  yield takeEvery(DEMO_SAGA_ACTION, getDemoSaga);
  // yield takeEvery(CREATE_TODO, createTodo);
}

// combine sagas
export default function* demoSaga() {
  yield all([actionWatcher()]);
}
