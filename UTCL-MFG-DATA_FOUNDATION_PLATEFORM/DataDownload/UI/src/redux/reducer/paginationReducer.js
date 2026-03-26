const initialState = {
  totalPages: 0,
  currentPage: 1,
  pages: [],
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TOTAL_PAGES":
      for (var i = 1; i < action.payload; i++) {
        state.pages.push(i);
      }

      return { ...state, totalPages: action.payload, pages: state.pages };
    case "ADD_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
