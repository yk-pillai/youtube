import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);
  console.log("child")
  return <div>{returnComment("Me")}</div>;
}

export default React.memo(Child);
// export default Child;
