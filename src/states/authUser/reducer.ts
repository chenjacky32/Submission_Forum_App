import api from '../../utils/api';
import { ActionType } from './action';

const initState = {
  isLogin: false || (api.getAccessToken() && true),
  isRegister: false,
  Userprofile: {},
};

function authUserReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        isLogin: false,
        Userprofile: {},
        isRegister: false,
      };
    case ActionType.REGISTER:
      return {
        ...state,
        isRegister: true,
      };
    case ActionType.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}

export default authUserReducer;
