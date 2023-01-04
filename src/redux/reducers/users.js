import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  users: [],
  loading: false
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return { users: payload }
    case ActionTypes.CREATE_USER:
      return {
        ...state, users: [...state.users, payload]
      }
    case ActionTypes.UPDATE_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id ? { ...state.users, ...payload }
            : user
        )
      }
    }
    case ActionTypes.DELETE_USER:
      const filteredUser = state.users.filter(({ id }) => id !== payload.id)
      return {
        ...state, users: filteredUser
      }
    default:
      return state;
  }
};
