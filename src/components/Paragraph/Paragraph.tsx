import React, { memo } from "react";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";
import { Spacer } from "@/components/UI/Spacer";

interface IProps {
  title: string;
  text: string;
}
function Paragraph({ title, text }: IProps) {
  return (
    <div>
      <Typography color={theme.colors.gray} type={TypographyTypes.TEXT_1}>
        {title}
      </Typography>
      <Spacer heightDesktop="20px" />
      <Typography type={TypographyTypes.TEXT_4}>{text}</Typography>
    </div>
  );
}

export default memo(Paragraph);
