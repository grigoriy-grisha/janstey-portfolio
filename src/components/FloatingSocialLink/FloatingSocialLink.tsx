import { memo } from "react";
import classes from "./FloatingSocialLink.module.css";
import { SocialLink } from "../../components/UI/SocialLink";
import useMediaQuery from "../../hooks/useMedia";
import { theme } from "../../utils/theme";

interface IProps {
  bottom: number | string;
}
function FloatingSocialLink({ bottom }: IProps) {
  const isTablet = useMediaQuery(theme.breakpointQueries.tabletAndMobile);

  if (isTablet) return null;

  return (
    <div style={{ bottom }} className={classes.floating}>
      <SocialLink leftText="BEHANCE" rightText="TELEGRAM" />
    </div>
  );
}

export default memo(FloatingSocialLink);
