import React,{ useEffect, useState } from 'react'
import './AnalogClock.css';

const AnalogClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    const getRotation = (unit, value) => {
      const degrees = unit === 'hours' ? value * 30 : value * 6;
      return `rotate(${degrees}deg)`;
    };


  return (
    <div className="analog-clock">
      <div
        className="hand hour-hand"
        style={{ transform: getRotation('hours', time.getHours() % 12 + time.getMinutes() / 60) }}
      />
      <div
        className="hand minute-hand"
        style={{ transform: getRotation('minutes', time.getMinutes() + time.getSeconds() / 60) }}
      />
      <div
        className="hand second-hand"
        style={{ transform: getRotation('seconds', time.getSeconds()) }}
      />
    </div>
  )
}

export default AnalogClock