import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { pushMessage } from "../utils/chatSlice";
import { useDispatch } from "react-redux";
import { generateName, generateText } from "../utils/helper";
import { useSelector } from "react-redux";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);
  const [sendMessage, setSendMessage] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        pushMessage({
          name: generateName(),
          text: generateText(20),
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="border border-black h-[600px] overflow-x-hidden flex flex-col-reverse">
        {chats.map((c, index) => (
          <Chat key={index} chat={c} />
        ))}
      </div>
      <form
        className="w-full border border-black border-t-0 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(pushMessage({
            name: "Yedhukrishnan",
            text: sendMessage
          }));
          setSendMessage("");
        }}
      >
        <input
          type="text"
          className="w-10/12 border border-gray-400"
          onChange={(e) => setSendMessage(e.target.value)}
          value={sendMessage}
        ></input>
        <button className="bg-gray-200 rounded-md p-1 ml-3">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
