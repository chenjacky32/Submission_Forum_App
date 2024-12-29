import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { AppDispatch } from '../../states/index';
import { GetThreadPayload, GetUsersPayload, VotePayload, createdThreadPayload } from '../../global-types/types';

const ActionType = {
  GET_THREAD_AND_USER: 'GET_THREAD_AND_USER',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_THREAD_VOTE: 'NEUTRALIZE_THREAD_VOTE',
};

function getThreadsAndUsersActionCreator(payload: { threads: GetThreadPayload[]; users: GetUsersPayload[] }) {
  return {
    type: ActionType.GET_THREAD_AND_USER,
    payload,
  };
}

function addThreadsActionCreator(payload: boolean) {
  return {
    type: ActionType.ADD_THREAD,
    payload,
  };
}

function upVoteThreadActionCreator(payload: VotePayload) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload,
  };
}

function downVoteThreadActionCreator(payload: VotePayload) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload,
  };
}

function neutralizeThreadActionCreator(payload: VotePayload) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_VOTE,
    payload,
  };
}

function asyncGetThreadAndUsers() {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const Threads = await api.getAllThreads();
      console.log('threads', Threads);
      const Users = await api.getAllUsers();
      console.log('users', Users);
      dispatch(getThreadsAndUsersActionCreator({ threads: Threads, users: Users }));
      dispatch(addThreadsActionCreator(false));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncAddThread({ title, body, category }: createdThreadPayload) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.createThread({ title, body, category });
      dispatch(addThreadsActionCreator(true));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUpVoteThread(params: VotePayload) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.upVoteThread(params.threadId);
      dispatch(upVoteThreadActionCreator(params));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDownVoteThread(params: VotePayload) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.downVoteThread(params.threadId);
      dispatch(downVoteThreadActionCreator(params));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncNeutralizeThreadVote(params: VotePayload) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.neutralizeThreadVote(params.threadId);
      dispatch(neutralizeThreadActionCreator(params));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  getThreadsAndUsersActionCreator,
  addThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeThreadActionCreator,
  asyncGetThreadAndUsers,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeThreadVote,
};
