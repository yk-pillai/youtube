import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';
import { convertViewsToString, timeAgo } from '../utils/helper';

//used styled component just for practice
const VideoImg = styled.img`
  cursor: pointer;
  border-radius: 8px;
`;
const ChannelImg = styled(VideoImg)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const VideoCard = ({info}) => {
  const {snippet, statistics} = info;
  const channelData = useSelector((store) => store.cache.channel);

  return (
    <div className="w-80 p-3">
      <Link to={"/watch?v=" + info.id}>
        <VideoImg
          src={snippet.thumbnails.medium.url}
          alt={snippet.channelTitle}
        ></VideoImg>
      </Link>
      <div className="flex mt-2 gap-2">
        <ChannelImg
          className=""
          src={channelData?.[snippet?.channelId]?.snippet?.thumbnails?.default.url}
          alt={snippet.channelTitle}
        ></ChannelImg>
        <div>
          <div className="font-bold line-clamp-2">{snippet.title}</div>
          <div className="text-gray-600 font-medium text-sm">
            {snippet.channelTitle}
          </div>
          <div className="text-gray-600 font-medium text-sm flex items-center">
            {convertViewsToString(statistics.viewCount)}
            <BsDot />
            {timeAgo(snippet.publishedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard
