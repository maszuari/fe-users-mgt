import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SUCCESS,
  ERROR
} from "./types";

import { history } from '../common/history';
import AuthService from "../services/auth.service";
import { alertActions } from "./alert";

const login = (username, password) => (dispatch) => {
  try {
    console.log('USERNAME PWD ', username, password );
    AuthService.login(username, password).then(
      (data) => {
        
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });

      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: ERROR,
          payload: message
        });

      }
    );
  } catch (error) {
    console.log('Error ', error);
  }
};

const logout = () => (dispatch) => {
  try {
    AuthService.logout();
    dispatch({ type: LOGOUT, });
  } catch (error) {
    console.log('Error ', error);
  }

};

export const userActions = {
  login,
  logout
};


//  TODO: create a user.