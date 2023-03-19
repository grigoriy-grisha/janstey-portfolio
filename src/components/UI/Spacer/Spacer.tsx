import { memo } from "react";

import { Media } from "@/components/UI/Media";

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
  return (
    <Media
      desktopContent={
        <div style={{ height: heightDesktop, width: widthDesktop }}></div>
      }
      tabletContent={
        <div
          style={{
            height: heightTablet || heightDesktop,
            width: widthTablet || widthDesktop,
          }}
        ></div>
      }
      mobileContent={
        <div
          style={{
            height: heightMobile || heightTablet || heightDesktop,
            width: widthMobile || widthTablet || widthDesktop,
          }}
        ></div>
      }
    />
  );
}

export default memo(Spacer);
