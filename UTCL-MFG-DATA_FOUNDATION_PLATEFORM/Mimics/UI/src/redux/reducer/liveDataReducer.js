const initialState = {
  plantLiveData: null,
  error: null,
};

export const liveDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLANT_LIVE_DATA_CONFIRMATION":
      return { ...state, plantLiveData: action.payload };
    case "LIVE_STATUS_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
