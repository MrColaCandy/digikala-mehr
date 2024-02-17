import { useState, useEffect } from 'react';

function useCountdown(initialSeconds,callback) {
  const [countdown, setCountdown] = useState(initialSeconds);
  
  function resetCountdown()
  {
    setCountdown(initialSeconds);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (countdown === 0 && callback) {
      callback();
    }
  }, [countdown, callback]);
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return {
    minutes,
    seconds,
    resetCountdown,
  };
}

export default useCountdown;

