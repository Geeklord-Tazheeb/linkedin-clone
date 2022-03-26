import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
const recentItems = (topic) => (
  <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
  </div>
);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="cover.jpg" alt="cover_photo" />
        <Avatar className="sidebar__avatar" />
        <h2>Tazheeb Shamsi</h2>
        <h4>Building Web Apps with React & Express</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">2,978</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">2,578</p>
        </div>
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItems("ReactJs")}
          {recentItems("Programming")}
          {recentItems("Frontend Developer")}
          {recentItems("Backend Developer")}
          {recentItems("Fullstack Developer")}
          {recentItems("Software Developer")}
          {recentItems("Digital Marketting")}
      </div>
    </div>
  );
}

export default Sidebar;
