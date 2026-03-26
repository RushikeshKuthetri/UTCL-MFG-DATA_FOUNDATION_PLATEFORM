export const eventHubReducer = (state = [], action) => {
  switch (action.type) {
    case "SOCKET_DATA":
      return action.payload;
    default:
      return state;
  }
};
