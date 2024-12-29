import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { AppDispatch } from '../index';
import { LeaderBoardsPayload } from '../../global-types/types';

const ActionType = {
  GET_LEADERBOARDS: 'GET_LEADERBOARDS',
};

function GetLeaderBoards(payload: LeaderBoardsPayload[]) {
  return {
    type: ActionType.GET_LEADERBOARDS,
    payload,
  };
}

function AsyncGetLeaderBoards() {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();

      dispatch(GetLeaderBoards(leaderboards));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, AsyncGetLeaderBoards, GetLeaderBoards };
