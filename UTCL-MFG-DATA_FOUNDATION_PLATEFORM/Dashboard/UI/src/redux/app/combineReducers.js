import { combineReducers } from "redux";
import { authReducer } from "../reducer/authReducer";
import { userStatusReducer } from "../reducer/userStatusReducer";
import { adminReducer } from "../reducer/adminReducer";
export const reducers = combineReducers({
  authProvider: authReducer,
  userStatus: userStatusReducer,
  adminProvider: adminReducer,
});
