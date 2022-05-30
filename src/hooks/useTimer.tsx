import { useEffect, useRef, useState } from "react";

type TimerFunctions = [() => void, () => void];

export const useTimer = <T,>(
  callback: (...args: T[]) => void,
  delaySec?: number
): TimerFunctions => {
  const [remainingDelay, setRemainingDelay] = useState<number | null>(
    (delaySec && delaySec * 1000) || null
  );
  const delayStartRef = useRef<number>(Date.now());
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (remainingDelay && !timerIdRef.current) {
      const tick = (...args: T[]) => savedCallback.current(...args);
      timerIdRef.current = setTimeout(tick, remainingDelay);
    }

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, [remainingDelay]);

  const pause = () => {
    if (remainingDelay && timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      setRemainingDelay(remainingDelay - (Date.now() - delayStartRef.current));
    }
  };

  const resume = () => {
    if (remainingDelay) {
      delayStartRef.current = Date.now();
      const tick = (...args: T[]) => savedCallback.current(...args);
      timerIdRef.current = setTimeout(tick, remainingDelay);
    }
  };

  return [pause, resume];
};
