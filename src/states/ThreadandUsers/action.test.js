import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  describe, it, vi, afterEach, beforeEach,
  expect,
} from 'vitest';
import {
  asyncGetThreadAndUsers,
  getThreadsAndUsersActionCreator,
} from './action';

/**
 * skenario test
 *
 * - asyncGetThreadAndUsers thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const FakeResponseThread = [
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

const FakeResponseUser = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const AlertErrorResponse = new Error('Ada yang Error');

describe('asyncGetThreadAndUsers thunk', () => {
  beforeEach(() => {
    api._getAllThreads = api.getAllThreads;
    api._getAllUsers = api.getAllUsers;
  });

  afterEach(() => {
    api.getAllThreads = api._getAllThreads;
    api.getAllUsers = api._getAllUsers;

    delete api._getAllThreads;
    delete api._getAllUsers;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getAllThreads = () => Promise.resolve(FakeResponseThread);
    api.getAllUsers = () => Promise.resolve(FakeResponseUser);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncGetThreadAndUsers()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(getThreadsAndUsersActionCreator({
      threads: FakeResponseThread,
      users: FakeResponseUser,
    }));
    expect(dispatch).toHaveBeenCalledWith((hideLoading()));
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub

    api.getAllThreads = () => Promise.reject(AlertErrorResponse);
    api.getAllUsers = () => Promise.reject(AlertErrorResponse);

    // action
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncGetThreadAndUsers()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(AlertErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
