import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
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
          <p>Recents</p>
      </div>
    </div>
  );
}

export default Sidebar;
