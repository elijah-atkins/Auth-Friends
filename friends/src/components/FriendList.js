import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendList extends React.Component {
  state = {
    friendList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("ea: FriendList.js getData results:", res.data);
        this.setState({
            friendList: res.data
        })
      })
      .catch(err =>
        console.error("ea: FriendList.js: getData: err.message: ", err.message)
      );
  };



  render() {
      console.log("ea, FriendList",this.state.friendList)
    return (
      <div className="friend-list">
        {this.state.friendList.map(friend => {
            return(
                <div className="friend">
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            )
        })}
      </div>
    );
  }
}

export default FriendList;