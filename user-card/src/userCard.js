import React from 'react';


const UserCard = (props) => {
    return(
        <div>
            <h2>Me</h2>
            <img src={props.user.avatar_url} alt = "My user avatar"></img>
            <h3>{props.user.name}</h3>
            <h4>{props.user.login}</h4>
            <p>{props.user.bio}</p>
            <p># of Followers: {props.user.followers} </p>
            <p># of Following: {props.user.following} </p>
            <a href={props.user.html_url}>My Repo</a>
        </div>
    )
}



export default UserCard;