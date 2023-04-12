import useMediaQuery from "./useMediaQuery";
type Result = {
  isMobile: boolean;
  isTab: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isTV: boolean;
};
/**
 *
 *
 * @returns {Result} Is the media query active
 */
const useResponsive = (): Result => {
  const isMobileMin = useMediaQuery("(min-width:320px)");
  const isMobileMax = useMediaQuery("(max-width:480px)");
  const isMobile = isMobileMax && isMobileMin;
  const isTabMin = useMediaQuery("(min-width:481px)");
  const isTabMax = useMediaQuery("(max-width:768px)");
  const isTab = isTabMax && isTabMin;
  const smallScreenMin = useMediaQuery("(min-width:769px)");
  const smallScreenMax = useMediaQuery("(max-width:1024px)");
  const isLaptop = smallScreenMax && smallScreenMin;
  const largeScreenMin = useMediaQuery("(min-width:1205px)");
  const largeScreenMax = useMediaQuery("(max-width:1200px)");
  const isDesktop = largeScreenMax && largeScreenMin;
  const isTV = useMediaQuery("(min-width:1201px)");
  return { isMobile, isTab, isLaptop, isDesktop, isTV };
};
export default useResponsive;
