import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {
  const {snippet, statistics} = info;
  return (
    <div className="w-80 p-3">
      <Link to={"/watch?v="+info.id}>
        <img
          className="cursor-pointer"
          src={snippet.thumbnails.medium.url}
          alt={snippet.channelTitle}
        ></img>
      </Link>
      <div className="font-bold">{snippet.title}</div>
      <div>{snippet.channelTitle}</div>
      <div>{statistics.viewCount} views</div>
    </div>
  );
}

export default VideoCard
