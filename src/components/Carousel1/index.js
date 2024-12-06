import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button } from "antd";

const Carousel = () => {
  const arr = [1, 2, 3, 4, 5];
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const allImages = document.querySelectorAll(".dummy-image");

    allImages.forEach((img, i) => {
      img.style.transform = `translateX(${(i - curr) * 300}px)`;
      img.style.visibility = i === curr ? "visible" : "hidden"; // Hide non-current elements
    });
  }, [curr]);

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

      <div className="dummy-images-wrapper">
        {arr.map((ele) => (
          <div key={ele} className="dummy-image center">
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
