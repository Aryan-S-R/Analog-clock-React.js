import React, { useState } from "react";
import "./Digital.css";

const Digital = () => {
  let time = new Date().toLocaleTimeString();

  const [atime, setAtime] = useState();

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setAtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <h1>{atime}</h1>
    </>
  );
};

export default Digital;
