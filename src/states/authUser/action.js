import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
  SET_PROFILE: 'SET_PROFILE',
};

function loginActionCreator() {
  return {
    type: ActionType.LOGIN,
  };
}

function logoutActionCreator() {
  return {
    type: ActionType.LOGOUT,
  };
}

function registerActionCreator() {
  return {
    type: ActionType.REGISTER,
  };
}

function setProfileActionCreator(payload) {
  return {
    type: ActionType.SET_PROFILE,
    payload,
  };
}

function asyncLoginAction({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.login({ email, password });
      dispatch(loginActionCreator());
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncRegisterAction({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
      dispatch(registerActionCreator());
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncGetProfileAction() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const userProfile = await api.getOwnProfile();
      dispatch(setProfileActionCreator(userProfile));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  loginActionCreator,
  logoutActionCreator,
  registerActionCreator,
  setProfileActionCreator,
  asyncLoginAction,
  asyncRegisterAction,
  asyncGetProfileAction,
};
