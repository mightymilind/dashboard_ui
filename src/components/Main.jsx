import React from "react";
import "./main.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import PublishIcon from "@mui/icons-material/Publish";
import Person2Icon from "@mui/icons-material/Person2";
import GroupsIcon from "@mui/icons-material/Groups";
import Posts from "./Posts";

function main() {
  return (
    <div className="main">
      {/* container */}
      <div className="container">
        <div className="lefttxt">
          <div className="boldt">
            Welcome back, <span className="boldtxt">folks!</span>
          </div>
          <span>Here are your activities today!</span>
        </div>
        <div className="cont_date">
          <span className="date">
            <CalendarMonthIcon />
            Feb, 18 2023
          </span>
        </div>
      </div>
      {/* cards */}

      <div className="cards">
        <div className="card">
          <div className="f1">
            <i
              style={{
                backgroundColor: "#ed746f",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              <GraphicEqIcon />
            </i>
            <span className="no">389</span>
            <i style={{ color: "#10e637" }}>
              <CallMadeIcon />
            </i>
          </div>
          <div className="f2">
            <span>New Activities</span>
            <h6 style={{ color: "#10e637" }}>+900%</h6>
          </div>
        </div>
        {/* 2 */}
        <div className="card">
          <div className="f1">
            <i
              style={{
                backgroundColor: "#f26fe5",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              <PublishIcon />
            </i>
            <span className="no">7.9k</span>
            <i style={{ color: "red" }}>
              <CallReceivedIcon />
            </i>
          </div>
          <div className="f2">
            <span>Total Activities</span>
            <h6 style={{ color: "red" }}>-60%</h6>
          </div>
        </div>
        {/* 3 */}
        <div className="card">
          <div className="f1">
            <i
              style={{
                backgroundColor: "#ac71f0",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              <Person2Icon />
            </i>
            <span className="no">242</span>
            <i style={{ color: "red" }}>
              <CallReceivedIcon />
            </i>
          </div>
          <div className="f2">
            <span>Active Member</span>
            <h6 style={{ color: "red" }}>-9%</h6>
          </div>
        </div>
        {/* 4 */}
        <div className="card">
          <div className="f1">
            <i
              style={{
                backgroundColor: "#84e6fa",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              <GroupsIcon />
            </i>
            <span className="no">989</span>
            <i style={{ color: "#10e637" }}>
              <CallMadeIcon />
            </i>
          </div>
          <div className="f2">
            <span>New Member</span>
            <h6 style={{ color: "#10e637" }}>+30%</h6>
          </div>
        </div>
      </div>

      {/* posts */}
      <Posts />
    </div>
  );
}

export default main;
