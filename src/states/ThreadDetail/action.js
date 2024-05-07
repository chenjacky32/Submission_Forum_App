import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType ={
    GET_THREAD_DETAIL:'GET_THREAD_DETAIL',
    UP_VOTE_THREAD_DETAIL:'UP_VOTE_THREAD_DETAIL',
    DOWN_VOTE_THREAD_DETAIL:'DOWN_VOTE_THREAD_DETAIL',
    NEUTRALIZE_THREAD_DETAIL_VOTE:'NEUTRALIZE_THREAD_DETAIL_VOTE',
    ADD_COMMENT:'ADD_COMMENT'
};

function getThreadDetailActionCreator(payload){
    return {
        type: ActionType.GET_THREAD_DETAIL,
        payload
    }
}

function upVoteThreadActionCreator(payload){
    return{
        type:ActionType.UP_VOTE_THREAD_DETAIL,
        payload
    }
}

function downVoteThreadDetailActionCreator(payload){
    return{
        type:ActionType.DOWN_VOTE_THREAD_DETAIL,
        payload
    }
}   


function neutralizeThreadDetailVoteActionCreator(payload){
    return {
        type:ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE,
        payload
    }
}

function addCommentActionCreator(payload){
    return {
        type: ActionType.ADD_COMMENT,
        payload
    }
}


function asyncGetThreadDetail(id){
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            const response = await api.getThreadDetail(id)
            dispatch(addCommentActionCreator(false))
            dispatch(getThreadDetailActionCreator(response))
        } catch (error) {
            alert(error.message)
        } finally{
            dispatch(hideLoading());
        }
    }
}


function asyncUpVoteThread(id){
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            await api.upVoteThread(id.threadId)
            dispatch(upVoteThreadActionCreator(id))
        } catch (error) {
            alert(error.message)
        } finally{
            dispatch(hideLoading());
        }
    }
}

function asyncDownVoteThread(id){
    return async (dispatch) =>{
        dispatch(showLoading())
        try {
            await api.downVoteThread(id.threadId)
            dispatch(downVoteThreadDetailActionCreator(id))
        } catch (error) {
            alert(error.message)
        } finally{
            dispatch(hideLoading());
        }
    }
}

function asyncNeutralizeThreadDetailVote(id){
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.neutralizeThreadVote(id.threadId)
            dispatch(neutralizeThreadDetailVoteActionCreator(id))
        } catch (error) {
            alert(error.message)
        } finally{
            dispatch(hideLoading());
        }
    }
}

function asyncAddComment(param){
    return async(dispatch) =>{
        dispatch(showLoading())
        try {
            await api.createComment(param);
            dispatch(addCommentActionCreator(true))
        } catch (error) {
            alert(error.message)
        }finally{
            dispatch(hideLoading());
        }
    }
}



export {
    ActionType,
    getThreadDetailActionCreator,
    upVoteThreadActionCreator, 
    downVoteThreadDetailActionCreator,
    neutralizeThreadDetailVoteActionCreator,
    addCommentActionCreator,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncGetThreadDetail,
    asyncNeutralizeThreadDetailVote,
    asyncAddComment
}


