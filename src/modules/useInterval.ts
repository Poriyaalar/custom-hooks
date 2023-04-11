import { useEffect, useRef } from "react";

const useInterval = (callback: Function, delay: number, stop: any): void => {
  const savedCallback = useRef<any>();
  const interval = useRef<any>();
  useEffect(() => {
    savedCallback.current = callback;
    if (stop?.()) {
      clearInterval(interval.current);
    }
  }, [callback]);

  useEffect((): any => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      interval.current = setInterval(tick, delay);
      return () => clearInterval(interval.current);
    }
  }, [delay]);
};
export default useInterval;
