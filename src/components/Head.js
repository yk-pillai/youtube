import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleHamMenu } from "../utils/appSlice";
import { useSelector } from "react-redux";
import { resetCache, storeCache } from "../utils/cacheSlice";

const Head = () => {
  const [searchtext, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.cache.search);
  const dispatch = useDispatch();
  const handleHamMenu = () => {
    dispatch(toggleHamMenu());
  };
  const getSuggestions = async () => {
    if (searchtext) {
      if (searchCache[searchtext]) {
        setSuggestions(searchCache[searchtext]);
      } else {
        const data = await fetch(
          "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
            searchtext
        );
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(storeCache({
          [searchtext]: json[1]
        }));
      }
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchtext]);

  return (
    <div className="grid grid-flow-col p-1 fixed bg-white w-full">
      <div className="col-span-1 flex">
        <img
          className="h-16 cursor-pointer"
          alt="hamburger-menu"
          src="https://www.cuomomarine.it/wp-content/uploads/iconham.png"
          onClick={() => handleHamMenu()}
        ></img>
        <a href="/">
          <img
            className="h-16"
            alt="logo"
            onClick={() =>
              dispatch(
                resetCache()//this won't work because page refresh happens before redux state reset
              )
            }
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          ></img>
        </a>
      </div>
      <div className="col-span-10 p-4">
        <div className="flex">
          <input
            type="text"
            className="h-9 border border-gray-200 rounded-l-full w-1/2 ml-40 p-3"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <img
            className="h-9 border border-gray-200 rounded-r-full"
            alt="search"
            src="https://w7.pngwing.com/pngs/403/380/png-transparent-computer-icons-youtube-symbol-information-black-dandelion-circle-symbol-magnifying-glass-thumbnail.png"
          ></img>
        </div>
        {suggestions.length !== 0 && showSuggestions && (
          <div className="border border-gray-200 rounded-lg w-[720px] ml-40 bg-gray-100 py-2 fixed">
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li key={suggestion} className="flex px-2 hover:bg-gray-300">
                    <img
                      className="h-7 mr-2"
                      alt="search"
                      src="https://w7.pngwing.com/pngs/403/380/png-transparent-computer-icons-youtube-symbol-information-black-dandelion-circle-symbol-magnifying-glass-thumbnail.png"
                    ></img>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 rounded-full mt-4"
          alt="user-icon"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Head;
