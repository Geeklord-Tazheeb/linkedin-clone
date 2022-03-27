import { Avatar } from "@material-ui/core";
import { ChatOutlined, 
         SendOutlined,
         Shortcut, 
        ThumbUpAltOutlined 
      } from "@mui/icons-material";
import React from "react";
import "./Post.css"
import InputOptions from "./InputOption";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2> {name}</h2>
          <p>{description}</p>
        </div>
      </div>
      
      <div className="post__body">
        <p> {message }</p>
      </div>
    <div className="post__buttons">
      <InputOptions Icon={ThumbUpAltOutlined} title= "Like" color="grey"/>
      <InputOptions Icon={ChatOutlined} title= "Comment" color="grey"/>
      <InputOptions Icon={Shortcut} title= "Share" color="grey"/>
      <InputOptions Icon={SendOutlined} title= "Send" color="grey"/>
    </div>
      </div>
  );
}

export default Post;
