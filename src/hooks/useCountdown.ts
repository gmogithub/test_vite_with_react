import { useEffect, useRef, useState } from "react";

export const useCountdown = (counterStart: number, onComplete: () => void, timeInMs: number = 1000) => {
  const [counter, setCounter] = useState<number>(counterStart)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter(c => c - 1);
    }, timeInMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      onComplete();
    }
  }, [counter]);

  function stopCounter() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  function reloadCounter() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setCounter(counterStart);
      intervalRef.current = setInterval(() => {
        setCounter(c => c - 1);
      }, timeInMs);
    }
  }

  return { counter, stopCounter, reloadCounter };
}