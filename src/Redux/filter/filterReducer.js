import { SET_FILTER_STATUS } from "./filterConstants";

const initialState = {
  status: "all",
};

const filterReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_FILTER_STATUS:
      return { ...state, status: payload.status };
    default:
      return state;
  }
};

export default filterReducer;
