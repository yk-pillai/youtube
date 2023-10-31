import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeHamMenu } from '../utils/appSlice';
// import CommentsContainer from './CommentsContainer';
// import LiveChat from './LiveChat';
import VideoInfo from './VideoInfo';
import WatchPageVideoContainer from './WatchPageVideoContainer';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeHamMenu());
  },[])

  return (
    <div className="mt-20 mx-24 flex w-full">
      <div className="p-2 w-[74%]">
        <iframe
        className='rounded-lg'
          width="100%"
          height="700"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <VideoInfo/>
      </div>
      <WatchPageVideoContainer/>
    </div>
  );
}

export default WatchPage
