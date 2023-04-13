import { useEffect, useState } from "react";
/**
 *
 * A custom hook which takes a media query as the argument and returns a state
 * which will be true when the media query is active and false when not
 *
 * @example
 * const isMobile = useMediaQuery("(max-width:600px)");
 *
 * @returns {boolean} Is the media query active
 */
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
