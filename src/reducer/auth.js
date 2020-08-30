import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  USER_EMAIL,
  USER_PASSWORD,
} from "../actions/actionTypes";

//---- initial states
const initialAuthState = {
  error: null,
  userEmail: "",
  userPassword: "",
  isLoggedin: false,
  inProgress: false,
};

//---- actions of different action types
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true,
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
