import { ActionType } from "./action"


const initState = {
    threadDetail:{},
    commentCreated:false
}

function ThreadDetailReducer(state=initState, action={}){
    console.log(action.type)
    switch(action.type){
        case ActionType.GET_THREAD_DETAIL :
            return {
                ...state,
                threadDetail: action.payload
            } 
        case ActionType.ADD_COMMENT:
            return {
                ...state,
                commentCreated: action.payload
            }
        case ActionType.UP_VOTE_THREAD_DETAIL:
            return {
                ...state,
                threadDetail:{
                    ...state.threadDetail,
                    upVotesBy: [...state.threadDetail.upVotesBy, action.payload.userId],
                    downVoteBy: state.threadDetail.downVotesBy.filter((id)=> id !== action.payload.userId)
                }
            }
        case ActionType.DOWN_VOTE_THREAD_DETAIL:
            return {
                ...state,
                threadDetail:{
                    downVoteBy: [...state.threadDetail.downVoteBy, action.payload.userId],
                    upVotesBy: state.threadDetail.upVotesBy.filter((id)=> id !== action.payload.userId)
                }
            }
        case ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE:
            return {
                ...state,
                threadDetail:{
                    ...state.threadDetail,
                    upVotesBy: state.threadDetail.upVotesBy.filter((id)=> id !== action.payload.userId),
                    downVoteBy: state.threadDetail.downVotesBy.filter((id)=> id !== action.payload.userId)
                }
            }
    default:
        return state
    }
}

export default ThreadDetailReducer