import { ActionType } from './action';

const initState = {
  threads: [],
  users: [],
  addThread: false,
};

function ThreadandUsersReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.GET_THREAD_AND_USER:
      return {
        ...state,
        threads: action.payload.threads,
        users: action.payload.users,
      };
    case ActionType.ADD_THREAD:
      return {
        ...state,
        addThread: action.payload,
      };
    case ActionType.UP_VOTE_THREAD:
      return {
        ...state,
        threads: state.threads.map((thread) => (thread.id === action.payload.threadId && {
          ...thread,
          upVotesBy: [...thread.upVotesBy, action.payload.userId],
          downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
        }) || thread),
      };
    case ActionType.DOWN_VOTE_THREAD:
      return {
        ...state,
        threads: state.threads.map((thread) => (thread.id === action.payload.threadId && {
          ...thread,
          downVotesBy: [...thread.downVotesBy, action.payload.userId],
          upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
        }) || thread),
      };
    case ActionType.NEUTRALIZE_THREAD_VOTE:
      return {
        ...state,
        threads: state.threads.map((thread) => (thread.id === action.payload.threadId && {
          ...thread,
          upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
        }) || thread),
      };
    default:
      return state;
  }
}

export default ThreadandUsersReducer;
