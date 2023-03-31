import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";

import classes from "./JanstayHello.module.css";
import { useTranslation } from "next-i18next";
import { IconAvaRu } from "@/components/UI/Icons/IconAvaRu";
import React from "react";

function JanstayHello() {
  const { t } = useTranslation("common");

  return (
    <div className={classes.container}>
      <Typography color={theme.colors.gray} type={TypographyTypes.TEXT_1}>
        {t("janstayHello")}
      </Typography>
      <IconAvaRu />
      <Typography color={theme.colors.gray} type={TypographyTypes.TEXT_1}>
        {t("janstayName")}
      </Typography>
    </div>
  );
}

export default JanstayHello;
