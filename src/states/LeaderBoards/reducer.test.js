import LeaderBoardsReducer from './reducer';
import { describe, it, expect } from 'vitest';

/** Scenario Test
 *
 *  - should return the LeaderBoards state when given by GET_LEADERBOARDS action
 *
 */

describe('LeaderBoardsReducer', () => {
  it('should return the LeaderBoards state when given by GET_LEADERBOARDS action', () => {
    // arrange
    const initState = {
      leaderboards: [],
    };

    const action = {
      type: 'GET_LEADERBOARDS',
      payload: {
        user: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 10,
      },
    };
    // action
    const State = LeaderBoardsReducer(initState, action);
    // assert

    expect(State.leaderboards).toEqual(action.payload);
  });
});
