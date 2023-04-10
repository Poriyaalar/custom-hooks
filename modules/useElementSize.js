import { useCallback, useEffect, useState } from "react";

import useEventListener from "./useEventListener";

function useElementSize(elementRef) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const updateSize = useCallback(() => {
    const node = elementRef?.current;
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      });
    }
  }, [elementRef]);

  useEffect(() => {
    updateSize();
  }, [elementRef?.current?.offsetWidth]);

  useEventListener("resize", updateSize);

  return size;
}

export default useElementSize;
