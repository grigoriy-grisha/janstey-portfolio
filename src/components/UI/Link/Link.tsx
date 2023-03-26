import classes from "./Link.module.css";
import { Typography, TypographyTypes } from "../Typography";

interface IProps {
  children: string;
  href: string;
}

function Link({ children, href }: IProps) {
  return (
    <Typography type={TypographyTypes.TEXT_3}>
      <a href={href} target="_blank" className={classes.link}>
        {children}
      </a>
    </Typography>
  );
}

export default Link;
