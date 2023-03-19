import { memo } from "react";

import { Media } from "@/components/UI/Media";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";

import classes from "./CopyRightFooter.module.css";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useChangeToLocate from "@/hooks/useChangeToLocate";

function CopyRightFooter() {
  const { t } = useTranslation("common");
  const { changeTo, currentRoute } = useChangeToLocate();

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
          <Link href={currentRoute} locale={changeTo}>
            <Typography type={TypographyTypes.TEXT_REGULAR_3}>
              {t("translate")}
            </Typography>
          </Link>
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
