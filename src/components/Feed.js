import React, { useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InputOptions from './InputOption';
import Post from './Post';

function Feed() {

  const [posts, setPosts] = useState([]);

  return (
    <div className ="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                 <CreateIcon/>
                <form action="">
                   <input type="text" placeholder="Start a post"/>
                   <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
            <InputOptions Icon={ImageIcon} title="Photo" color= "rgb(112 181 249)"/>
            <InputOptions Icon={SubscriptionsIcon} title="Video" color= "rgb(127 193 94)"/>
            <InputOptions Icon={BusinessCenterIcon} title="Job" color= "rgb(168 212 255)"/>
            <InputOptions Icon={NewspaperIcon} title="Write article" color= "rgb(252 146 149)"/>
            </div>
        </div>

        {/* post */}
         {posts.map((post) =>(
            <Post/>
         ))}
        <Post/>
    </div>
  )
}

export default Feed