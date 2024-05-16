import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  describe, it, vi, afterEach, beforeEach, expect,
} from 'vitest';
import {
  AsyncGetLeaderBoards,
  GetLeaderBoards,
} from './action';

/**
 * skenario test
 *
 * - asyncGetLeaderBoards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const FakeResponseLeaderboards = [
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
];

const AlertErrorResponse = new Error('Ada yang Error');

describe('LeaderBoardsReducer thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards;
    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getLeaderboards = () => Promise.resolve(FakeResponseLeaderboards);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await AsyncGetLeaderBoards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(GetLeaderBoards(
      FakeResponseLeaderboards,
    ));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub
    api.getLeaderboards = () => Promise.reject(AlertErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await AsyncGetLeaderBoards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(AlertErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
