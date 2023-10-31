import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { timeAgo, convertViewsToString } from "../utils/helper";

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="flex gap-4 m-2 items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="author-profile"
        ></img>
        <div className="">
          <div className="flex gap-2 items-center">
            <div className="font-semibold">
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </div>
            <div className="text-sm">
              {timeAgo(comment.snippet.topLevelComment.snippet.updatedAt)}
            </div>
          </div>
          <div className="">
            {comment.snippet.topLevelComment.snippet.textOriginal}
          </div>
        </div>
      </div>
      <div className="flex ml-14 items-center gap-4">
        <div className="flex items-center gap-1">
          <FiThumbsUp className="text-xl" />
          {comment.snippet.topLevelComment.snippet.likeCount !== 0 &&
            convertViewsToString(
              comment.snippet.topLevelComment.snippet.likeCount
            ).slice(0, -6)}
        </div>
        <FiThumbsDown className="text-xl" />
        Reply
      </div>
    </div>
  );
};

export default Comment;
