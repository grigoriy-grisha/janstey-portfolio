import classes from "./Mail.module.css";
import { Typography, TypographyTypes } from "../Typography";

interface IProps {
  children: string;

  className?: string;
}
function Mail({ children, className }: IProps) {
  return (
    <Typography className={className} type={TypographyTypes.TEXT_1}>
      <a className={classes.mail}>{children}</a>
    </Typography>
  );
}
export default Mail;
