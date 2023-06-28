import React, { useState, useEffect } from 'react';

const Punto2 = () => {
  const [time, setTime] = useState(new Date());
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerID;

    if (running) {
      timerID = setInterval(() => setTime(new Date()), 1000);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handleStop}>Detener</button>
    </div>
  );
};

export default Punto2;
