import PropTypes from 'prop-types';

export default function LeaderBoardsItem({
  name, avatar, score, email,
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      margin: 'auto',
      borderStyle: 'solid',
      paddingBlock: '2rem',
      paddingInline: '2rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
    }}
    >
      <img src={avatar} alt="avatar" width="100px" height="100px" />
      <p>{name}</p>
      <p>{email}</p>
      <p>
        Score :
        {score}
      </p>
    </div>
  );
}

LeaderBoardsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
