import React from 'react';

const FollowerCard = (props) => {
    return(
        <div>
            <img src={props.follower.avatar_url} alt="their user avatar"></img>
            <h2>{props.follower.login}</h2>
            <a href={props.follower.html_url}>Their Repo</a>
        </div>
    )
}


export default FollowerCard;