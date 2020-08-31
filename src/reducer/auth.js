import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  USER_EMAIL,
  USER_PASSWORD,
} from "../actions/actionTypes";

//---- initial states
const initialAuthState = {
  error: false,
  userEmail: "",
  userPassword: "",
  isLoggedin: false,
  inProgress: false,
};

//---- changing store data accordingly different action
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case LOGIN_SUCCESS: {
      // console.log("LOGIN_SUCCESS:");
      return {
        ...state,
        isLoggedin: true,
        inProgress: false,
        error: false,
        userEmail: "",
        userPassword: "",
      };
    }
    case LOGIN_FAILED: {
      // console.log("LOGIN_FAILED:");
      return {
        ...state,
        inProgress: false,
        isLoggedin: false,
        error: true,
      };
    }
    case USER_EMAIL: {
      return {
        ...state,
        userEmail: action.userEmail,
      };
    }
    case USER_PASSWORD: {
      return {
        ...state,
        userPassword: action.userPassword,
      };
    }
    default:
      return state;
  }
}
