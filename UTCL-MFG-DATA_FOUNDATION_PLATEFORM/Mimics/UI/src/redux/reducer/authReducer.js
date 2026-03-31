const initialState = {
  isLogin: false,
  username: "",
  error: "",
  email: "",
  token: "",
  plants: [],
  plantBasedLines: [],
  plantBasedSection: [],
  plantBasedTagnames: [],
  userIp: "",
  extraTagDetails: [],
  hoTagDetails: [],
  tagAndLineCount: {},
  documents: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage?.setItem(
        "login",
        JSON.stringify({
          isLogggedin: true,
          token: action.payload.token,
          username: action.payload.username,
          email: action.payload.email,
          plants: action.payload.plants,
        })
      );
      return {
        ...state,
        isLogin: true,
        username: action.payload?.username,
        token: action.payload?.token,
        email: action.payload?.email,
        plants: action.payload.plants,
        // plantBasedSection: action.payload.section,
        // plantBasedTagnames: action.payload.tagnames,
      };
    case "LOGIN_SECTION_TAGS_DETAILS":
      return {
        ...state,
        plantBasedLines: action.payload.lines,
        plantBasedSection: action.payload.section,
        // plantBasedTagnames: action.payload.tagnames,
      };
    case "SECTION_TAGS_DETAILS":
      return {
        ...state,
        plantBasedTagnames: action.payload.tagNames,
      }
    case "ADDITIONAL_SECTION_TAGS_DETAILS":
      return {
        ...state,
        extraTagDetails: action.payload.tagNames,
      }
    case "HO_TAGS_DETAILS":
      return {
        ...state,
        hoTagDetails: action.payload.tagNames,
      }
    case "USER_IP":
      return {
        ...state,
        userIp: action.payload.userIp,
      }
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
    // Added by TRIDAI for fetching tags and lines count (25-03)
    case "TAG_AND_LINE_COUNT":
      return {
        ...state,
        tagAndLineCount: action.payload,
      };
    // Added by TRIDAI for fetching documents from S3 (30-03)
    case "SET_DOCUMENTS":
      return {
        ...state,
        documents: action.payload, 
      };
    default:
      return state;
  }
};
