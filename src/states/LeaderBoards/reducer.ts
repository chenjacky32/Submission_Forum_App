import { ActionType } from './action';

const initState = {
  leaderboards: [],
};

export default function LeaderBoardsReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.GET_LEADERBOARDS:
      return {
        ...state,
        leaderboards: action.payload,
      };
    default:
      return state;
  }
}
