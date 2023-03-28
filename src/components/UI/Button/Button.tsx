import classes from "./Button.module.css";
import classnames from "classnames";
import { Typography, TypographyTypes } from "../Typography";
import { HTMLAttributes, ReactNode } from "react";

export enum ButtonTypes {
  Dark = "dark",
  Light = "light",

  DarkBordered = "dark-bordered",
  LightBordered = "light-bordered",
  Transparent = "transparent",
}

type ButtonAttributes = HTMLAttributes<"button">;

interface IProps extends ButtonAttributes {
  withoutBorder?: boolean;
  children: string;
  type: ButtonTypes;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;

  fullWidth?: boolean;
  activeForceHover?: boolean;
  rotateRightButton?: boolean;
}

function Button({
  children,
  type,
  leftIcon,
  rightIcon,
  fullWidth,
  activeForceHover,
  rotateRightButton,
  withoutBorder,
  className,
}: IProps) {
  return (
    <button
      className={classnames(
        classes.button,
        classes[type],
        { [classes[`hover-${type}`]]: activeForceHover },
        { [classes.fullWidth]: fullWidth },
        { [classes.withoutBorder]: withoutBorder },
        className
      )}
    >
      {leftIcon && (
        <span className={classnames(classes[`icon-${type}`], classes.icon)}>
          {leftIcon}
        </span>
      )}
      <Typography type={TypographyTypes.TXT_BUTTON_1}>{children}</Typography>
      {rightIcon && (
        <span
          className={classnames(
            classes[`icon-${type}`],
            { [classes.rotatedIcon]: rotateRightButton },
            classes.icon
          )}
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
}

export default Button;
