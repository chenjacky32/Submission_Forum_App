import PropTypes from "prop-types";

export default function LeaderBoardsItem({name, avatar, score, email}){
    return<>
            <div style={{display:"flex", 
                        flexDirection:"column", 
                        gap:"10px",
                        margin:"auto", 
                        borderStyle:"solid", 
                        paddingBlock:"2rem", 
                        paddingInline:"2rem",
                        marginBottom:"2rem",
                        }}>
                            <img src={avatar} alt="avatar" />
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>Score : {score}</p>
                    </div>
    </>
}


LeaderBoardsItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    score:PropTypes.number.isRequired,
}