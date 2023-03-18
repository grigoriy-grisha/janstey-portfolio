import { ReactNode } from "react";
import useMediaQuery from "@/hooks/useMedia";
import { theme } from "@/utils/theme";

interface IProps {
  desktopContent: ReactNode;
  tabletContent?: ReactNode;
  mobileContent?: ReactNode;
}
function Media({ desktopContent, tabletContent, mobileContent }: IProps) {
  const isMobile = useMediaQuery(theme.breakpointQueries.mobile);
  const isTablet = useMediaQuery(theme.breakpointQueries.tablet);

  console.log(isMobile, "isMobile");
  if (isMobile) return <>{mobileContent || tabletContent || desktopContent}</>;
  if (isTablet) return <>{tabletContent || desktopContent}</>;
  return <>{desktopContent}</>;
}

export default Media;
