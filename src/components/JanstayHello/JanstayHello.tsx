import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";
import ava from "@/images/icons/ava.png";

import classes from "./JanstayHello.module.css";
import Image from "next/image";
function JanstayHello() {
  return (
    <div className={classes.container}>
      <Typography color={theme.colors.gray} type={TypographyTypes.TEXT_1}>
        Hey, I’m
      </Typography>
      <Image className={classes.img} src={ava} alt="janstay" />
      <Typography color={theme.colors.gray} type={TypographyTypes.TEXT_1}>
        janstay
      </Typography>
    </div>
  );
}

export default JanstayHello;
