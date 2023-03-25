import classnames from "classnames";
import classes from "./SocialLink.module.css";
import { Typography, TypographyTypes } from "../Typography";

interface IProps {
  leftText: string;
  leftHref: string;
  rightHref: string;
  rightText: string;
}

function SocialLink({ leftText, leftHref, rightText, rightHref }: IProps) {
  return (
    <div className={classes.wrapper}>
      <Typography
        className={classnames(classes.leftButton, classes.button)}
        type={TypographyTypes.SOCIAL_BUTTON_1}
      >
        <a href={leftHref}>{leftText}</a>
      </Typography>
      <Typography
        className={classnames(classes.rightButton, classes.button)}
        type={TypographyTypes.SOCIAL_BUTTON_1}
      >
        <a href={rightHref}>{rightText}</a>
      </Typography>
    </div>
  );
}
export default SocialLink;
