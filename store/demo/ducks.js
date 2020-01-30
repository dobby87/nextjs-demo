import { DEMO_REQUEST, DEMO_SUCCESS, DEMO_FAILURE, DEMO_ACTION } from "./types";

// actions
export const demoAction = payload => ({
  type: DEMO_ACTION,
  payload
});

// initial state
const initialState = {
  str: "asd",
  obj: {
    title: "demo component"
  },
  arr: ["arr1", "arr2", "arr3", "arr4", "arr5"]
};

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DEMO_ACTION:
      return {
        ...state,
        str: "demo action"
      };
    case DEMO_REQUEST:
      return {
        ...state
      };
    case DEMO_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        str: action.payload
      };
    case DEMO_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
