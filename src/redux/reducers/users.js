import { ActionTypes } from "../contants/actionTypes";

const initialState = [];

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_USER:
      return [...state, payload];
    case ActionTypes.GET_USERS:
      return payload;
    case ActionTypes.DELETE_USER:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};
