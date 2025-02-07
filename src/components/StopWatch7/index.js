import React, { useEffect, useState } from "react";

const StopWatch = () => {
  let interval = React.useRef(null);
  const [time, setTime] = useState(59);

  const resetTimer = () => {
    setTime(0);
    clearInterval(interval.current);
    startTimer();
  };

  const startTimer = () => {
    interval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(interval.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const sec = time % 60;
  const min = Math.floor(time / 60) % 60;
  const hr = Math.floor(time / (60 * 60)) % 24;

  return (
    <div className="center">
      <p>
        {hr} : {min} : {sec}
      </p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Restart</button>
        <button onClick={pauseTimer}>Pause</button>
      </div>
    </div>
  );
};

export default StopWatch;
