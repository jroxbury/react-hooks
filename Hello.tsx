import React, { useState, useEffect, useContext } from "react";
import { useWindowWidth } from "./useWindowWidth";

export default ({ start }) => {
  const [count, setCount] = useState(start);
  const width = useWindowWidth(count);

  useEffect(() => {
    console.log({ count });
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked: {count} times
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Window Width: {width}</p>
    </div>
  );
};
