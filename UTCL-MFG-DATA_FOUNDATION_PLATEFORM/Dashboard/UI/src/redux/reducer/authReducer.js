const initialState = {
  isLogin: false,
  username: "",
  error: "",
  email: "",
  token: "",
  plants: [],
  modules: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // console.debug(action.payload);
      localStorage?.setItem(
        "login",
        JSON.stringify({
          isLogggedin: true,
          token: action.payload.token,
          username: action.payload.username,
          email: action.payload.email,
          plants: action.payload.plants,
          modules: action.payload.modules,
        })
      );
      return {
        ...state,
        isLogin: true,
        username: action.payload?.username,
        token: action.payload?.token,
        email: action.payload?.email,
        plants: action.payload.plants,
        modules: action.payload.modules,
      };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload };
    case "LOGIN_TRUE":
      return {
        ...state,
        isLogin: true,
        username: action.payload?.username,
        token: action.payload?.token,
        email: action.payload?.email,
        plants: action.payload?.plants,
      };
    case "LOGOUT":
      localStorage.clear("login");
      return {
        ...state,
        isLogin: false,
        username: "",
        token: "",
        email: "",
        plants: [],
        error: "",
      };
    default:
      return state;
  }
};
