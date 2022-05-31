import { useEffect, useRef } from "react";

type TimerFunctions = [() => void, () => void];

export const useTimer = <T,>(
  callback: (...args: T[]) => void,
  delaySec?: number
): TimerFunctions => {
  const remainingDelayRef = useRef<number | null>(
    (delaySec && delaySec * 1000) || null
  );
  const delayStartRef = useRef<number>(Date.now());
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (remainingDelayRef.current) {
      const tick = (...args: T[]) => savedCallback.current(...args);
      timerIdRef.current = setTimeout(tick, remainingDelayRef.current);
    }

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, []);

  const pause = () => {
    if (remainingDelayRef.current && timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      remainingDelayRef.current -= Date.now() - delayStartRef.current;
    }
  };

  const resume = () => {
    if (remainingDelayRef.current) {
      delayStartRef.current = Date.now();
      const tick = (...args: T[]) => savedCallback.current(...args);
      timerIdRef.current = setTimeout(tick, remainingDelayRef.current);
    }
  };

  return [pause, resume];
};
