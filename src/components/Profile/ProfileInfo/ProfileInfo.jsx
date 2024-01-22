import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://img.tsargrad.tv/cache/d/7/revolut.jpg/w720h405fill.jpg"
        ></img>
      </div>
      <div className={s.descriptionBlock}>ava + text</div>
    </div>
  );
};
export default ProfileInfo;
