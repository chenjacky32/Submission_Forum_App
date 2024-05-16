import { useDispatch, useSelector } from 'react-redux';
import { AsyncGetLeaderBoards } from '../states/LeaderBoards/action';
import { useEffect } from 'react';
import LeaderBoardsItem from '../components/LeaderBoardsItem';

export default function LeaderBoards() {
  const { leaderboards } = useSelector((state) => state.LeaderBoards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AsyncGetLeaderBoards());
  }, [dispatch]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      paddingBlock: '4rem',
      flexDirection: 'column',
    }}
    >
      <h1 style={{
        fontSize: '3rem',
        textDecoration: 'underline',
        textAlign: 'center',
        marginBottom: '2rem',
      }}
      >
        LeaderBoards
      </h1>
      {leaderboards.map((leaderboard) => (
        <LeaderBoardsItem
          key={leaderboard.user.id}
          name={leaderboard.user.name}
          avatar={leaderboard.user.avatar}
          score={leaderboard.score}
          email={leaderboard.user.email}
        />
      ))}
    </div>
  );
}
