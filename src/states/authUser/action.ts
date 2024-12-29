import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { AppDispatch } from '../../states/index';
import { GetUsersPayload, AuthUserLoginPayload, AuthUserRegisterPayload } from '../../global-types/types';

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

function setProfileActionCreator(payload: GetUsersPayload) {
  return {
    type: ActionType.SET_PROFILE,
    payload,
  };
}

function asyncLoginAction({ email, password }: AuthUserLoginPayload) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.login({ email, password });
      dispatch(loginActionCreator());
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncRegisterAction({ name, email, password }: AuthUserRegisterPayload) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
      dispatch(registerActionCreator());
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncGetProfileAction() {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      const userProfile = await api.getOwnProfile();
      dispatch(setProfileActionCreator(userProfile));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncLogoutAction() {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      api.removeAccessToken();
      dispatch(logoutActionCreator());
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, loginActionCreator, logoutActionCreator, registerActionCreator, setProfileActionCreator, asyncLoginAction, asyncRegisterAction, asyncGetProfileAction, asyncLogoutAction };
