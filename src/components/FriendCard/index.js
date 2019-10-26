import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
<div id="topDiv">
    <div className="card">
      <div className="img-container" onClick={() => props.removeFriend(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    </div>

      
  );
}

export default FriendCard;
