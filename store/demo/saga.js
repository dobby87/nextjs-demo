import { DEMO_REQUEST, DEMO_SUCCESS, DEMO_FAILURE } from "./types";
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
    // call api
    yield delay(3000);
    // put action
    yield put({
      type: DEMO_SUCCESS,
      payload: "demo saga activated"
    });
  } catch (e) {
    // error log
    console.error(e);
    // error action
    yield put({ type: DEMO_FAILURE });
  }
}

// watcher
function* actionWatcher() {
  yield takeEvery(DEMO_REQUEST, getDemoSaga);
  // yield takeEvery(CREATE_TODO, createTodo);
}

// combine sagas
export default function* demoSaga() {
  yield all([actionWatcher()]);
}
