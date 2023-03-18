import { memo } from "react";

import { Media } from "@/components/UI/Media";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";

import classes from "./CopyRightFooter.module.css";

function CopyRightFooter() {
  return (
    <Media
      desktopContent={
        <div className={classes.copyright}>
          <Typography
            color={theme.colors.gray}
            type={TypographyTypes.TEXT_REGULAR_3}
          >
            ©2023 Janstay. All copyrights reserved.
          </Typography>
          <Typography type={TypographyTypes.TEXT_REGULAR_3}>
            На русский
          </Typography>
        </div>
      }
      mobileContent={
        <div>
          <Typography
            className={classes.copyrightMedia}
            color={theme.colors.gray}
            type={TypographyTypes.TEXT_REGULAR_3}
          >
            ©2023 Janstay. All copyrights reserved.
          </Typography>
        </div>
      }
    />
  );
}

export default memo(CopyRightFooter);
