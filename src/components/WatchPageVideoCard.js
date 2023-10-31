import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { convertViewsToString, timeAgo } from "../utils/helper";
import { pushTags } from "../utils/buttonTagSlice";
import { useDispatch, useSelector } from "react-redux";


const WatchPageVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const dispatch = useDispatch();
  let details = useSelector((store) => store.tag.buttons);


  const reverseTheVideoList = () => {
    const reversedVideoList = details.All.slice().reverse();
    let detailsClone = Object.assign({}, details);
    detailsClone.All = reversedVideoList;
    dispatch(pushTags(detailsClone))
  }


  return (
    <div className="px-3 flex w-full gap-3 items-center mt-2">
      <Link to={"/watch?v=" + info.id} className="w-[45%]">
        <img
          className="rounded-lg h-full"
          src={snippet.thumbnails.medium.url}
          alt={snippet.channelTitle}
          onClick={() => reverseTheVideoList()} //this function is called just to have the feel that recommended videos have changed.
        ></img>
      </Link>
      <div className="gap-2 w-[55%]">
        <div className="font-bold line-clamp-2">{snippet.title}</div>
        <div className="text-gray-600 font-medium text-xs">
          {snippet.channelTitle}
        </div>
        <div className="text-gray-600 font-normal text-sm flex items-center">
          {convertViewsToString(statistics.viewCount)}
          <BsDot />
          {timeAgo(snippet.publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default WatchPageVideoCard;
