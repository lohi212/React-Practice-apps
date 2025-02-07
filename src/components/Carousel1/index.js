import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button } from "antd";

const Carousel = () => {
  const arr = [1, 2, 3, 4, 5];
  const [curr, setCurr] = useState(0);

  const handlePrev = () => {
    const newCurr = curr > 0 ? curr - 1 : 4;

    setCurr(newCurr);
  };

  const handleNext = () => {
    const newCurr = curr < 4 ? curr + 1 : 0;

    setCurr(newCurr);
  };

  return (
    <div className=" ">
      <div className="flex">
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      {/* For one image */}
      <div className="dummy-images-wrapper">
        <div key={arr[curr]} className="dummy-image center">
          {arr[curr]}
        </div>
      </div>

      {/* For set of 3 images */}
      {arr.slice(curr, curr + 3).map((ele) => (
        <div className="dummy-images-wrapper">
          <div key={ele} className="dummy-image center">
            {ele}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
