//--- Action Creators

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_EMAIL,
  USER_PASSWORD,
} from "./actionTypes";

//--- urls store dif types of API calls
import { APIUrls } from "../helpers/urls";

//---- login initiated
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

//---- error encounter during login
export function loginFailed() {
  return {
    type: LOGIN_FAILED,
  };
}

//---- login successfully
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

//---- fuction call API and send data for login and dispatch action according
export function login(email, password) {
  // console.log("data:", email, password);
  return (dispatch) => {
    dispatch(startLogin());

    const url = APIUrls.login();
    //---- convert data in json format
    const body = JSON.stringify({
      email: email,
      password: password,
    });
    //---- craete API call and get response
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }).then((response) => {
      if (response.status === 200) {
        dispatch(loginSuccess());
        return;
      }
      dispatch(loginFailed());
    });
  };
}

//---- add user email
export function addEmail(userEmail) {
  return {
    type: USER_EMAIL,
    userEmail,
  };
}
//---- dispatch action to add email
export function addUserEmail(email) {
  return (dispatch) => {
    dispatch(addEmail(email));
  };
}

//----  add user password
export function addPassword(userPassword) {
  return {
    type: USER_PASSWORD,
    userPassword,
  };
}
//---- dispatch action to add password
export function addUserPassword(password) {
  return (dispatch) => {
    dispatch(addPassword(password));
  };
}
