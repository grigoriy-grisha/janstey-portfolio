import { memo } from "react";

import useMediaQuery from "@/hooks/useMedia";
import { theme } from "@/utils/theme";

interface IProps {
  heightDesktop?: string | number;
  widthDesktop?: string | number;

  heightTablet?: string | number;
  widthTablet?: string | number;

  heightMobile?: string | number;
  widthMobile?: string | number;
}
function Spacer({
  heightDesktop,
  widthDesktop,
  heightTablet,
  widthTablet,
  heightMobile,
  widthMobile,
}: IProps) {
  const isTablet = useMediaQuery(theme.breakpointQueries.tablet);
  const isMobile = useMediaQuery(theme.breakpointQueries.mobile);

  if (isTablet) {
    return (
      <div
        style={{
          height: heightTablet || heightDesktop,
          width: widthTablet || widthDesktop,
        }}
      ></div>
    );
  }

  if (isMobile) {
    return (
      <div
        style={{
          height: heightMobile || heightTablet || heightDesktop,
          width: widthMobile || widthTablet || widthDesktop,
        }}
      ></div>
    );
  }

  return <div style={{ height: heightDesktop, width: widthDesktop }}></div>;
}

export default memo(Spacer);
