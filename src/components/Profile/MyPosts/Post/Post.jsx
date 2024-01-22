import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img
          className={s.img}
          src="https://seeklogo.com/images/C/che-logo-E8D4FC91BC-seeklogo.com.png"
        ></img>
        {props.message}
        <div>
          <span>Like {props.likecount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
