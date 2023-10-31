import React, { useEffect } from 'react'
import {YOUTUBE_VIDEOS_URL} from "../utils/constants"
import VideoCard from './VideoCard';
import { useDispatch } from 'react-redux';
import { pushTags,mergeVideos } from '../utils/buttonTagSlice';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { YOUTUBE_TEST_DATA, YOUTUBE_CHANNEL } from '../utils/constants';
import { addChannelData } from '../utils/cacheSlice';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const clickedButton = useSelector(store => store.tag.clickedButton)
  const buttonVideoList = useSelector(store => store.tag.buttons)
  const channels = {};

  const getMoreVideos = () => {
    setTimeout(()=>{
      dispatch(mergeVideos(YOUTUBE_TEST_DATA));
    },2000)
  }

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    const tags = {};
    const tagArray = { All: [] };
    let channelIds = "";
    // dispatch(pushPageToken(json.nextPageToken));
    // console.log(json.items);
    json.items.map((item) => {
      channelIds += item.snippet.channelId + ",";
      tagArray["All"].push(item);
      item?.["snippet"]?.["tags"]?.map((tag) => {
        if (!tags[tag]) {
          tags[tag] = [item];
        } else {
          tags[tag] = tags[tag].concat(item);
        }
        return 0;
      });
      return 0;
    });

    for (let key in tags) {
      if (tags[key].length > 1) {
        tagArray[key] = tags[key];
      }
    }
    // console.log(channelIds);
    channelIds = channelIds.slice(0,-1)
      const channelData = await fetch(
        YOUTUBE_CHANNEL +
          "&id=" + channelIds
      );
      const channelJson = await channelData.json();
      channelJson.items.forEach(element => {
        channels[element.id] = element
      });
      // console.log(channels);
      dispatch(addChannelData(channels))
    dispatch(pushTags(tagArray));
  }

  useEffect(()=>{
    getVideos();
  },[])

  const Shimmer = () => {
    return (
      <div className="flex flex-wrap">
        {[...Array(5)].map((value,index)=>{
          return (
            <div className="w-[296px] h-[286px] m-3" key={index}>
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
    <div className="flex flex-wrap mt-12 absolute -z-10">
      {buttonVideoList[clickedButton] ? (
        <InfiniteScroll
          className="flex flex-wrap"
          dataLength={buttonVideoList[clickedButton].length}
          next={getMoreVideos}
          hasMore={true}
          loader={<Shimmer />}
        >
          {buttonVideoList[clickedButton] &&
            buttonVideoList[clickedButton].map((video) => (
              <VideoCard key={video.id} info={video} />
            ))}
        </InfiniteScroll>
      ) : null}
    </div>
  );
}

export default VideoContainer
