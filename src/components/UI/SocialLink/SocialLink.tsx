import classnames from "classnames";
import classes from "./SocialLink.module.css";
import { Typography, TypographyTypes } from "../Typography";

interface IProps {
  leftText: string;
  rightText: string;
}

function SocialLink({ leftText, rightText }: IProps) {
  return (
    <div className={classes.wrapper}>
      <Typography
        className={classnames(classes.leftButton, classes.button)}
        type={TypographyTypes.SOCIAL_BUTTON_1}
      >
        <a>{leftText}</a>
      </Typography>
      <Typography
        className={classnames(classes.rightButton, classes.button)}
        type={TypographyTypes.SOCIAL_BUTTON_1}
      >
        <a>{rightText}</a>
      </Typography>
    </div>
  );
}
export default SocialLink;
