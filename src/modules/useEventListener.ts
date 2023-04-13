import React, { useEffect, useRef } from "react";

function useEventListener(
  eventName: string,
  handler: Function,
  element?: React.RefObject<HTMLInputElement>
) {
  /**
   *
   *
   * @example
   * useEventListener("click",(e)=>console.log(e),ref);
   *
   */
  const savedHandler = useRef<any>();

  useEffect(() => {
    const targetElement = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    const eventListener = (event: any) => {
      if (savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}

export default useEventListener;
