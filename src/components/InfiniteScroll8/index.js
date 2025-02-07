import React, { useState } from "react";
import "./styles.css";

const InfiniteScroll = () => {
  const arr = Array.from({ length: 30 }, (e, i) => i);
  const [arrEle, setArrEle] = useState(arr);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop === clientHeight) {
      setArrEle([...arrEle, ...arr]);
    }
  };

  return (
    <div className="w-100 h-400 infinite-box" onScroll={handleScroll}>
      <div>
        {arrEle.map((ele) => (
          <div>{ele}</div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
