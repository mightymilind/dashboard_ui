import React from "react";
import "./rightSidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

function RightSidebar() {
  return (
    <div className="right">
      <div className="top">
        <div className="search">
          <button className="button">
            <i>
              <SearchIcon />
              {/* <input type="text" /> */}
            </i>
            Search...
          </button>
        </div>
        <div className="chat">
          <i>
            <ChatIcon />
          </i>
        </div>
        <div className="chat">
          <i>
            <CircleNotificationsIcon />
          </i>
        </div>
        {/* search */}
        {/* chat */}
        {/* notify */}
      </div>
      {/* Profile */}
      <div className="image">
        <img
          src="https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg"
          alt=""
        />
      </div>
      {/* text */}
      <div className="info">
        <div>
          <span className="name">Milind Pushpam</span>
        </div>
        <span className="desc">Web developer</span>
        <div>
          <p>
            Hey I'm a web developer. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
