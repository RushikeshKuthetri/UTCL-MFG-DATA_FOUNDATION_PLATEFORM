import { combineReducers } from "redux";
import { authReducer } from "../reducer/authReducer";
import { eventHubReducer } from "../reducer/eventHubReducer";
import { filterReducer } from "../reducer/filterReducer";
import { popupReducer } from "../reducer/popupReducer";
import { paginationReducer } from "../reducer/paginationReducer";
import { userStatusReducer } from "../reducer/userStatusReducer";
import { navReducer } from "../reducer/navReducer";
import { balajiPopupReducer } from "../reducer/balajiPopupReducer";
import { adminReducer } from "../reducer/adminReducer";
import { liveDataReducer } from "../reducer/liveDataReducer";
import { hoDashboardReducer } from "../reducer/hoDashboardReducer";
import { plotlyReducer } from "../reducer/plotlyReducer";

export const reducers = combineReducers({
  eventHubdata: eventHubReducer,
  filterData: filterReducer,
  showPopup: popupReducer,
  authProvider: authReducer,
  pagination: paginationReducer,
  userStatus: userStatusReducer,
  navbarProvider: navReducer,
  balajiPopup: balajiPopupReducer,
  adminProvider: adminReducer,
  liveData: liveDataReducer,
  centralisedDashboardData: hoDashboardReducer,
  plotlyProvider: plotlyReducer
});
