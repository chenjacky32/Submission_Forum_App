import { describe, it, expect } from 'vitest';
import ThreadandUsersReducer from './reducer';

/** Scenario Test
 *
 *  - should return the initial state when given by unknown action
 *  - should return thread and user when given by GET_THREAD_AND_USER action'
 *  - should return addThread when given by ADD_THREAD action
 */

describe('ThreadandUsersReducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initState = {
      threads: [],
      users: [],
      addThread: false,
    };

    const action = { type: 'UNKNOWN' };
    // action
    const State = ThreadandUsersReducer(initState, action);

    // assert
    expect(State).toEqual(initState);
  });

  it('should return thread and user when given by GET_THREAD_AND_USER action', () => {
    // arrange
    const initState = [];
    const action = {
      type: 'GET_THREAD_AND_USER',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };
    // action
    const State = ThreadandUsersReducer(initState, action);
    // assert
    expect(State).toEqual(action.payload);
  });

  it('should return status addThread when given by ADD_THREAD action', () => {
    // arrange
    const initState = {
      threads: [],
      users: [],
      addThread: false,
    };
    const action = {
      type: 'ADD_THREAD',
      payload:
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    };
    // action
    const State = ThreadandUsersReducer(initState, action);
    // assert
    expect(State.addThread).toEqual(action.payload);
  });
});
