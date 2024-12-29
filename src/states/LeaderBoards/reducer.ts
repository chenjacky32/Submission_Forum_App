import { PayloadAction } from '@reduxjs/toolkit';
import { ActionType } from './action';
import { LeaderBoardsPayload } from '../../global-types/types';

const initState = {
  leaderboards: [] as LeaderBoardsPayload[],
};

export default function LeaderBoardsReducer(state = initState, action: PayloadAction<LeaderBoardsPayload>) {
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
