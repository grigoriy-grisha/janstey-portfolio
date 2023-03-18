import { ReactNode } from "react";

import classnames from "classnames";

import { ThemeColorValues } from "@/utils/theme";

import classes from "./Typography.module.css";

interface IProps {
  children: ReactNode;
  type: TypographyTypes;
  className?: string;
  color?: ThemeColorValues;
  uppercase?: boolean;
}

export enum TypographyTypes {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  TXT_BUTTON_1 = "TXT_BUTTON_1",
  SOCIAL_BUTTON_1 = "SOCIAL_BUTTON_1",
  TEXT_R_1 = "TEXT_R_1",
  TEXT_1 = "TEXT_1",
  TEXT_2 = "TEXT_2",
  TEXT_3 = "TEXT_3",

  TEXT_4 = "TEXT_4",
  TEXT_REGULAR_3 = "TEXT_REGULAR_3",
}

function Typography({ children, type, color, uppercase, className }: IProps) {
  return (
    <span
      style={{
        color,
        textTransform: uppercase ? "uppercase" : undefined,
        textDecoration: "none",
      }}
      className={classnames(classes[type], className)}
    >
      {children}
    </span>
  );
}

export default Typography;
