import React from "react";
import { useSelector } from "react-redux";
import WatchPageVideoCard from "./WatchPageVideoCard";

const WatchPageVideoContainer = () => {
  const allVideos = useSelector((store) => store.tag.buttons);
  return (
    <div className="w-[26%]">
      {allVideos.All.map((vid) => {
        return <WatchPageVideoCard key={vid.id} info={vid} />;
      })}
    </div>
  );
};

export default WatchPageVideoContainer;
