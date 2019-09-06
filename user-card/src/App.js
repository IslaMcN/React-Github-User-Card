import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './userCard.js';
import FollowerCard from './followerCard';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      userData: {},
      followerData: [],
      userName: "IslaMcN"
    }
  }

  componentDidMount = () => {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then((response) => {
      this.setState({
        userData: response.data
      });
    })
    .catch(err => console.log(err));

    axios.get (`https://api.github.com/users/${this.state.userName}/followers`)
    .then(response => {
      this.setState({
        followerData: response.data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>GitHub Peeps</h1>
        <UserCard user={this.state.userData}/>
        <div>
          {this.state.followerData.map(follower =>{ 
            return <FollowerCard follower={follower}/>
          })}
        </div>
        
      </div>
    )
  }
}

export default App;
