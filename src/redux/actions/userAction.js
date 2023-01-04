import axios from "axios";
import { userService } from "../../Apis/Services/service";
import { ActionTypes } from "../contants/actionTypes";

export const searchItem = (text) => (dispatch) => {
  dispatch({
    type: ActionTypes.SEARCH_USER,
    payload: text
  })
};


export const getAllUsersByName = text => async dispatch => {
  await axios
    .get(`http://localhost:3005/users?name=${text}`)
    .then(response =>
      dispatch({
        type: ActionTypes.GET_USERS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await userService.getAllUsers();

    dispatch({
      type: ActionTypes.GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const createUser = (user) => async (dispatch) => {
  try {
    const response = await userService.createNewUser(user)

    dispatch({
      type: ActionTypes.CREATE_USER,
      payload: response.data
    });

    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await userService.deleteUser(id)

    dispatch({
      type: ActionTypes.DELETE_USER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await userService.editUser(id, data);

    dispatch({
      type: ActionTypes.UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

