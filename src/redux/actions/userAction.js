import { userService } from "../../Apis/Services/service";
import { ActionTypes } from "../contants/actionTypes";

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

