import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  users: [],
  user: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_USER:
      return { ...state, users: payload };
    case ActionTypes.GET_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
