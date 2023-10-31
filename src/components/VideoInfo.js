import { useEffect, useState } from "react";
import { BsArrowClockwise, BsDownload, BsThreeDots } from "react-icons/bs";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { timeAgo, convertViewsToString } from "../utils/helper";
import { YOUTUBE_VIDEO_COMMENTS } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

const VideoInfo = () => {
  const { All : videoDetails } = useSelector((store) => store.tag.buttons);
  const channelData = useSelector((store) => store.cache.channel);
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState(null);
  const data = videoDetails.filter((vid) => {
      return vid.id === searchParams.get("v");
  });
  const channel = channelData?.[data[0].snippet.channelId];

  useEffect(() => {
    async function fetchComments() {
      const data = await fetch(
        YOUTUBE_VIDEO_COMMENTS + "&videoId=" + searchParams.get("v")
      );
      const json = await data.json();
      setComments(json);
    }
    fetchComments();
  }, [searchParams]);
  if (!channel) return null;
  return (
    <div>
      <div className="font-bold my-3">{data[0].snippet.title}</div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src={channel?.snippet.thumbnails.default.url}
          ></img>
          <div>
            <div className="font-bold">{data[0].snippet.channelTitle}</div>
            <div className="text-gray-700 text-sm">
              {convertViewsToString(channel?.statistics.subscriberCount).slice(
                0,
                -6
              )}{" "}
              subscribers
            </div>
          </div>
          <div className="bg-black h-12 text-white px-4 pb-2 pt-3 rounded-full font-bold text-sm ml-3">
            Subscribe
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-200 py-2 px-6 items-center rounded-full">
            <FiThumbsUp />
            <div className="ml-1">
              {convertViewsToString(data[0].statistics.likeCount).slice(0, -6)}
            </div>
            <RxDividerVertical size="30px" className="text-gray-400" />
            <FiThumbsDown />
          </div>
          <div className="bg-gray-200 px-3 py-3 rounded-full flex items-center gap-1">
            <BsArrowClockwise size="20px" />
            Share
          </div>
          <div className="bg-gray-200 px-3 py-3 rounded-full flex items-center gap-1">
            <BsDownload size="20px" />
            Download
          </div>
          <div className="bg-gray-200 px-3 py-3 rounded-full flex items-center gap-1">
            <BsThreeDots size="20px" />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-4 rounded-md my-4 text-sm">
        <div className="flex gap-2">
          <div className="font-semibold">
            {convertViewsToString(data[0].statistics.viewCount) +
              "\u00A0\u00A0" +
              timeAgo(data[0].snippet.publishedAt)}
          </div>
          <div className="text-gray-400 font-semibold text-sm">
            {/* #boAtSmartRing #SmartRing #boAt */}
            {data[0].snippet.tags?.slice(0, 3).map((tag) => "#" + tag + " ")}
          </div>
        </div>
        <div className="line-clamp-2">{data[0].snippet.description}</div>
      </div>
      {comments && <CommentsContainer comments={comments} />}
    </div>
  );
};

export default VideoInfo;
