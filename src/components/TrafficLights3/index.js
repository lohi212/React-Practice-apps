import React, { useEffect, useState } from "react";
import "./styles.css";

const TrafficLights = () => {
  const [active, setActive] = useState("red");
  const lightDurations = {
    red: 5000, // 5 seconds
    yellow: 3000, // 3 seconds
    green: 2000, // 2 seconds
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active === "red") setActive("yellow");
      if (active === "yellow") setActive("green");
      if (active === "green") setActive("red");
    }, [lightDurations[active]]);

    return () => {
      clearTimeout(timeout);
    };
  }, [active]);

  return (
    <div>
      <div className={`circle ${active === "red" ? "red" : ""}`}></div>
      <div className={`circle ${active === "yellow" ? "yellow" : ""}`}></div>
      <div className={`circle ${active === "green" ? "green" : ""}`}></div>
    </div>
  );
};

export default TrafficLights;
