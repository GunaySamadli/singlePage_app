import { combineReducers } from "redux";
import { userReducer } from "./users";

const reducers = combineReducers({
    allUsers: userReducer,
});
export default reducers;