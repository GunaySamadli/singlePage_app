import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  users: [],
  loading: false,
  searchItem: ""
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return { ...state.users, users: payload }
    case ActionTypes.CREATE_USER:
      return {
        ...state.users, users: [...state.users, payload]
      }
    case ActionTypes.UPDATE_USER: {
      return {
        ...state.users,
        users: state.users.map((user) =>
          user.id === payload.id ? { ...state.users, ...payload }
            : user
        )
      }
    }
    case ActionTypes.DELETE_USER:
      const filteredUser = state.users.filter(({ id }) => id !== payload.id)
      return {
        ...state.users, users: filteredUser
      }
    case ActionTypes.SEARCH_USER:
      return { ...state, searchItem: payload }
    default:
      return state;
  }
};
