import { useEffect, useRef } from "react";

export type TimerFunctions = {
  pauseTimer: () => void;
  resumeTimer: () => void;
};

export const useTimer = <T,>(callback: (...args: T[]) => void, delay?: number): TimerFunctions => {
  const remainingDelayRef = useRef<number | null>(delay || null);
  const startDelayRef = useRef<number>(Date.now());
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const { current: currentRemainingDelay } = remainingDelayRef;
    if (currentRemainingDelay) {
      const { current: currentCallback } = savedCallback;
      const tick = (...args: T[]) => currentCallback(...args);
      timerIdRef.current = setTimeout(tick, currentRemainingDelay);
    }

    return () => {
      const { current: currentTimerId } = timerIdRef;
      if (currentTimerId) {
        clearTimeout(currentTimerId);
      }
    };
  }, []);

  const pauseTimer = () => {
    const { current: currentTimerId } = timerIdRef;
    const { current: currentStartDelay } = startDelayRef;
    if (remainingDelayRef.current && currentTimerId) {
      clearTimeout(currentTimerId);
      remainingDelayRef.current -= Date.now() - currentStartDelay;
    }
  };

  const resumeTimer = () => {
    const { current: currentRemainingDelay } = remainingDelayRef;
    if (currentRemainingDelay) {
      const { current: currentCallback } = savedCallback;
      startDelayRef.current = Date.now();
      const tick = (...args: T[]) => currentCallback(...args);
      timerIdRef.current = setTimeout(tick, currentRemainingDelay);
    }
  };

  return { pauseTimer, resumeTimer };
};
