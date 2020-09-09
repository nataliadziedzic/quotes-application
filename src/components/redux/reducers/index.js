import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
import permissionReducer from "./permissionReducer";

const allReducers = combineReducers({
    taskReducer,
    userReducer,
    permissionReducer,
})

export default allReducers