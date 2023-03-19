import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { useTranslation } from "next-i18next";

function MainText() {
  const { t } = useTranslation("common");

  return (
    <Typography uppercase type={TypographyTypes.H1}>
      {t("mainText")}
    </Typography>
  );
}

export default MainText;
