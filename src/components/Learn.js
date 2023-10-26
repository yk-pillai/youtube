import { useCallback, useState } from "react";
import Child from "./Learn2";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hey, please click ");
  console.log("parent")
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  // const returnComment = (name) => {
  //     return data + name;
  //   }

  return (
    <div className="App pt-24">
      <Child returnComment={returnComment} />

      <button className="bg-black"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
