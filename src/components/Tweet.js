import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

const Tweet = (props) => {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <p className="message">{props.tweet.message}</p>
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;
