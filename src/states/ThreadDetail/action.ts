import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { AppDispatch } from '../../states/index';
import { VotePayload, AddComment, GetDetailThreadPayload } from '../../global-types/types';

const ActionType = {
  GET_THREAD_DETAIL: 'GET_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRALIZE_THREAD_DETAIL_VOTE: 'NEUTRALIZE_THREAD_DETAIL_VOTE',
  ADD_COMMENT: 'ADD_COMMENT',
};

function getThreadDetailActionCreator(payload: GetDetailThreadPayload) {
  return {
    type: ActionType.GET_THREAD_DETAIL,
    payload,
  };
}

function upVoteThreadActionCreator(payload: VotePayload) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload,
  };
}

function downVoteThreadDetailActionCreator(payload: VotePayload) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload,
  };
}

function neutralizeThreadDetailVoteActionCreator(payload: VotePayload) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE,
    payload,
  };
}

function addCommentActionCreator(payload: boolean) {
  return {
    type: ActionType.ADD_COMMENT,
    payload,
  };
}

function asyncGetThreadDetail(id: string) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      const response = await api.getThreadDetail(id);
      dispatch(addCommentActionCreator(false));
      dispatch(getThreadDetailActionCreator(response));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUpVoteThread(id: string) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.upVoteThread(id.threadId);
      dispatch(upVoteThreadActionCreator(id));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDownVoteThread(id) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.downVoteThread(id.threadId);
      dispatch(downVoteThreadDetailActionCreator(id));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncNeutralizeThreadDetailVote(id) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.neutralizeThreadVote(id.threadId);
      dispatch(neutralizeThreadDetailVoteActionCreator(id));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncAddComment(param: AddComment) {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(showLoading());
    try {
      await api.createComment(param);
      dispatch(addCommentActionCreator(true));
    } catch (error: any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  getThreadDetailActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeThreadDetailVoteActionCreator,
  addCommentActionCreator,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncGetThreadDetail,
  asyncNeutralizeThreadDetailVote,
  asyncAddComment,
};
