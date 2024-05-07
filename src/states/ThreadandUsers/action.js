import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";


const ActionType = {
    GET_THREAD_AND_USER : "GET_THREAD_AND_USER",
    ADD_THREAD : "ADD_THREAD",
    UP_VOTE_THREAD :"UP_VOTE_THREAD",
    DOWN_VOTE_THREAD:"DOWN_VOTE_THREAD",
    NEUTRALIZE_THREAD_VOTE: "NEUTRALIZE_THREAD_VOTE"
};

function getThreadsAndUsersActionCreator(payload){
    return {
        type: ActionType.GET_THREAD_AND_USER,
        payload
    }
}

function addThreadsActionCreator(payload){
    return{
        type: ActionType.ADD_THREAD,
        payload
    }
}

function upVoteThreadActionCreator(payload){
    return{
        type: ActionType.UP_VOTE_THREAD,
        payload
    }
}

function downVoteThreadActionCreator(payload){
    return{
        type: ActionType.DOWN_VOTE_THREAD,
        payload
    }
}

function neutralizeThreadActionCreator(payload){
    return{
        type: ActionType.NEUTRALIZE_THREAD_VOTE,
        payload
    }
}


function asyncGetThreadAndUsers(){
    return async(dispatch) =>{
        dispatch(showLoading())
        try {
            const Threads = await api.getAllThreads()
            const Users   = await api.getAllUsers()
            console.log(Threads)
            dispatch(getThreadsAndUsersActionCreator({threads: Threads,users: Users}))
            dispatch(addThreadsActionCreator(false))
            
        } catch (error) {
            alert(error.message)
        }finally{
            dispatch(hideLoading())
        }
    }
}

function asyncAddThread({ title,body,category }){
    return async(dispatch)=> {
        dispatch(showLoading())
        try {
            await api.createThread({ title,body,category })
            dispatch(addThreadsActionCreator(true))
        } catch (error) {
            alert(error.message)
        } finally{
            dispatch(hideLoading())
        }
    }
}

function asyncUpVoteThread(params){
    return async(dispatch) => {
        dispatch(showLoading())
        try {
            await api.upVoteThread(params.threadId)
            dispatch(upVoteThreadActionCreator(params))
        } catch (error) {
            alert(error.message)
        }finally{
            dispatch(hideLoading())
        }
    }
}

function asyncDownVoteThread(params){
    return async(dispatch) => {
        dispatch(showLoading())
        try {
            await api.downVoteThread(params.threadId)
            dispatch(downVoteThreadActionCreator(params))
        } catch (error) {
            alert(error.message)
        }finally{
            dispatch(hideLoading())
        }
    }
}

function asyncNeutralizeThreadVote(params){
    return async(dispatch) => {
        dispatch(showLoading())
        try {
            await api.neutralizeThreadVote(params.threadId)
            dispatch(neutralizeThreadActionCreator(params))
        } catch (error) {
            alert(error.message)
        }finally{
            dispatch(hideLoading())
        }
    }
}

export {
    ActionType,
    getThreadsAndUsersActionCreator,
    addThreadsActionCreator,
    upVoteThreadActionCreator,
    downVoteThreadActionCreator,
    neutralizeThreadActionCreator,
    asyncGetThreadAndUsers,
    asyncAddThread,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralizeThreadVote
}