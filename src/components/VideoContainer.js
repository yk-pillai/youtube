import React, { useEffect } from 'react'
import {YOUTUBE_VIDEOS_URL} from "../utils/constants"
import VideoCard from './VideoCard';
import { useDispatch } from 'react-redux';
import { pushTags,mergeVideos } from '../utils/buttonTagSlice';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { YOUTUBE_TEST_DATA } from '../utils/constants';
// import { pushDefaultVideos,pushPageToken, pushButtonVideos } from '../utils/videoListSlice';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const clickedButton = useSelector(store => store.tag.clickedButton)
  const buttonVideoList = useSelector(store => store.tag.buttons)

  const getMoreVideos = () => {
    setTimeout(()=>{
      dispatch(mergeVideos(YOUTUBE_TEST_DATA));
    },2000)
    // dispatch(mergeVideos(YOUTUBE_TEST_DATA));
  }

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    const tags = {};
    const tagArray = {"All":[]};
    // dispatch(pushPageToken(json.nextPageToken));
    // console.log(json.items);
    json.items.map((item) => {
      tagArray['All'].push(item);
      item?.["snippet"]?.["tags"]?.map((tag) => {
        if(!tags[tag]){
          tags[tag] = [item];
        }else{
          tags[tag] = tags[tag].concat(item);
        }
        return 0;
      })
      return 0;
    })

    for(let key in tags){
      if(tags[key].length > 1){
        tagArray[key] = tags[key];
      }
    }
    dispatch(pushTags(tagArray));
  }

  useEffect(()=>{
    getVideos();
  },[])

  const Shimmer = () => {
    return (
      <div className="flex flex-wrap">
        {[...Array(5)].map((index)=>{
          {console.log("first")}
          return (
            <div className="w-[296px] h-[286px] m-3">
              <div className="cursor-pointer bg-slate-200 w-[296px] h-[166px]"></div>
              <div className="bg-slate-200 w-[296px] h-16 mt-2"></div>
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap">
      {buttonVideoList[clickedButton] ? (
        <InfiniteScroll
          className="flex flex-wrap"
          dataLength={buttonVideoList[clickedButton].length}
          next={getMoreVideos}
          hasMore={true}
          loader={<Shimmer/>}
        >
          {buttonVideoList[clickedButton] &&
            buttonVideoList[clickedButton].map((video) => (
              <VideoCard key={Math.random()} info={video} />
            ))}
        </InfiniteScroll>
      ) : null}
    </div>
  );
}

export default VideoContainer
