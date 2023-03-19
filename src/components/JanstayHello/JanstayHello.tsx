import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";
import ava from "@/images/icons/ava.png";

import classes from "./JanstayHello.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";
function JanstayHello() {
  const { t } = useTranslation("common");

  return (
    <div className={classes.container}>
      <Typography color={theme.colors.gray} type={TypographyTypes.TEXT_1}>
        {t("jansteyHello")}
      </Typography>
      <Image className={classes.img} src={ava} alt="janstay-ava" />
      <Typography color={theme.colors.gray} type={TypographyTypes.TEXT_1}>
        {t("jansteyName")}
      </Typography>
    </div>
  );
}

export default JanstayHello;
