import { useState, useEffect } from "react";

export function useWindowWidth(change) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log("windowsize");
    // const handleResize = () => setWidth(window.innerWidth);
    // window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    return () => {
      // window.removeEventListener("resize", handleResize);
    };
  }, [change]);

  return width;
}

const test = () => [1, 2];
const [one, two] = test();
console.log({ one }, { two });
