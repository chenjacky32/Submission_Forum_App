import { useDispatch, useSelector } from "react-redux"
import FormatDate from '../utils/FormatDate';
import { Link } from 'react-router-dom';
// import ForumList from "../components/ForumList"
import {asyncGetThreadAndUsers,
        asyncUpVoteThread,
        asyncDownVoteThread,
        asyncNeutralizeThreadVote, 
} from '../states/ThreadandUsers/action';
import { useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";

function HomePage(){
    const { users, threads } = useSelector((state) => state.ThreadAndUser);
    const {profile, isLogin}  = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log(threads)

    function EventHandlerNeutralize(threadId){
        dispatch(asyncNeutralizeThreadVote({threadId, userId: profile.id}))
    }

    function EventHandlerVoteUp(threadId){
        const ThreadSelected = threads.find((item)=> item.id === threadId);
        !ThreadSelected.upVotesBy.includes(profile.id) ? dispatch(asyncUpVoteThread({threadId, userId: profile.id})):
        EventHandlerNeutralize(threadId)
    }

    function EventHandlerVoteDown(threadId){
        const ThreadSelected =  threads.find((item)=> item.id === threadId);
        !ThreadSelected.downVotesBy.includes(profile.id) ? dispatch(asyncDownVoteThread({threadId, userId: profile.id})):
        EventHandlerNeutralize(threadId)
    }

    useEffect(() => {
        dispatch(asyncGetThreadAndUsers())
    },[dispatch]);

    return (
    <>
    <section className="homepage">
        <div className="forum-list">
        <div className="forum-list__title">
            <h1>List Forum App</h1>
        </div>
        {threads.length > 0 && threads.map((thread)=> {
            return(
                <>
                <section key={thread.id} style={{marginBlock:'30px',marginInline:'50px'}}>
                    <div className="forum-item">
                    <div className="forum-item__detail">
                        <div className="container__detail">
                            <div className="forum-item__info">
                                <Link className="forum-item__title" to={`/threads/${thread.id}`}>{thread.title}</Link>
                            </div>
                            <p className="forum-item__created-at">{FormatDate(thread.createdAt)}</p>
                        </div>
                        <div className="container__detail__title">
                            <p className="forum-item__text">{thread.body}</p>
                        </div>
                        <div className="container__detail__user">
                            <p>{users.find((item)=> item.id === thread.ownerId).name}</p>
                        </div>
                        <div className="forum-item__vote">
                            <div className="upVote__button">
                                <p>{thread.upVotesBy.length}</p>
                                <button type="button" onClick={()=> EventHandlerVoteUp(thread.id)}>⬆️Up Vote</button>
                            </div>
                            <div className="downVote__button">
                                <button type="button" onClick={()=> EventHandlerVoteDown(thread.id)}>⬇️down Vote</button>
                                <p>{thread.downVotesBy.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {isLogin && (
                        <div style={{position:"fixed", right:'2rem', bottom:'2rem', fontSize:'1.25rem'}}>
                            <Link to="/add-discussion"><CiCirclePlus style={{color: "black", fontSize:'3rem'}}/></Link>
                        </div>
                    )}
                </div>
            </section>
                </>
            )})}
        </div>
    </section>
    </>
    )}

    export default HomePage;