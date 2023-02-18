import React from "react";
import "./leftSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import {GiRobotGolem} from "react-icons/gi";

function LeftSidebar() {
  return (
    <div className="left">
      {/* <h3>🚀Mighty</h3> */}
      <h3> <GiRobotGolem/> Mighty</h3>
      <div className="items">
        <h5>
          <DashboardIcon /> Dashboard
        </h5>
        <h5>
          <AccountCircleIcon />
          Profile
        </h5>
        <h5>
          <BarChartIcon />
          Analytics
        </h5>
        <h5>
          <GroupsIcon />
          Members
        </h5>
        <h5>
          <ArticleIcon />
          Documents
        </h5>
        <h5>
          <SettingsIcon />
          Setting
        </h5>
        <h5 className="logout">
          <LogoutIcon />
          Logout
        </h5>
      </div>
    </div>
  );
}

export default LeftSidebar;
