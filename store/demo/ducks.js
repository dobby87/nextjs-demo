import { DEMO_ACTION, DEMO_SAGA_ACTION, DEMO_SAGA_ASYNC_ACTION } from "./types";

// actions
export const demoAction = payload => ({
  type: DEMO_ACTION,
  payload
});

// initial state
const initialState = {
  str: "asd",
  obj: {},
  arr: []
};

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DEMO_ACTION:
      return {
        ...state,
        text: action.payload
      };

    case DEMO_SAGA_ACTION:
      console.log("a");
      return {
        ...state
      };
    case DEMO_SAGA_ASYNC_ACTION:
      console.log("c");
      return {
        ...state,
        sagaText: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
