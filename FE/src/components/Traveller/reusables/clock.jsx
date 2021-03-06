import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const date = new Date();
  return (
    <React.Fragment>
      <div style={{ fontSize: "40px" }}>{clockState}</div>
      <div style={{ fontSize: "20px", color:"white" }}>{date.toLocaleDateString()}</div>
    </React.Fragment>
  );
};

export default Clock;
