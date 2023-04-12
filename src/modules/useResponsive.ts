import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string): boolean => {
  const [doesQueryMatch, setDoesQueryMatch] = useState(
    () => window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const mediaQueryChangeHandler = (e: any): void => {
      setDoesQueryMatch(e.matches);
    };
    window
      .matchMedia(mediaQuery)
      .addEventListener("change", mediaQueryChangeHandler);
    return () => {
      window
        .matchMedia(mediaQuery)
        .removeEventListener("change", mediaQueryChangeHandler);
    };
  }, []);

  return doesQueryMatch;
};

export default useMediaQuery;
