import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from '../states/authUser/reducer';
import ThreadandUsersReducer from "../states/ThreadandUsers/reducer";
import ThreadDetailReducer from "../states/ThreadDetail/reducer";
import LeaderBoardsReducer from "../states/LeaderBoards/reducer"

const store = configureStore({
    reducer: {
        loadingBar : loadingBarReducer,
        auth: authUserReducer,
        ThreadAndUser: ThreadandUsersReducer,
        ThreadsDetail: ThreadDetailReducer,
        LeaderBoards: LeaderBoardsReducer,
    }
}) 

export default store;   