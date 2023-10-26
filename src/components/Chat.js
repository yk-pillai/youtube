import React from 'react'
//import { generateName, generateText } from '../utils/helper';

const Chat = ({chat}) => {
  return (
    <div className="flex items-center p-1">
      <img
        className="h-8 rounded-full"
        alt="user-icon"
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
      />
      <div className="font-bold">{(chat.name!==undefined)?chat.name:"ABC"}</div>
      <div className="ml-2">{chat.text}</div>
    </div>
  );
}

export default Chat
