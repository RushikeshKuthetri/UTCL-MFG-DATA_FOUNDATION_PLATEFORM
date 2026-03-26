const initialState = {
  adminEmail: "",
  adminToken: "",
  adminAccessLogData: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_SUCCESS":
      const { adminEmail, adminToken } = action.payload;
      return { ...state, adminEmail, adminToken };
    case "ADMIN_LOG_DATA":
      return {
        ...state,
        adminAccessLogData: action.payload,
      };
    default:
      return state;
  }
};
