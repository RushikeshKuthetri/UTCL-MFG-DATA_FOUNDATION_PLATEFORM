const initialState = {
  loading: false,
  error: "",
};
export const userStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_TRUE":
      return { ...state, loading: true, error: "" };
    case "LOADING_FALSE":
      return { ...state, loading: false };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    case "ERROR_FALSE":
      return { ...state, error: "" };
    default:
      return state;
  }
};
