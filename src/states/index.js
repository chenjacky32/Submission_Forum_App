import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import ThreadandUsersReducer from './ThreadandUsers/reducer';
import ThreadDetailReducer from './ThreadDetail/reducer';
import LeaderBoardsReducer from './LeaderBoards/reducer';

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    auth: authUserReducer,
    ThreadAndUser: ThreadandUsersReducer,
    ThreadsDetail: ThreadDetailReducer,
    LeaderBoards: LeaderBoardsReducer,
  },
});

export default store;
