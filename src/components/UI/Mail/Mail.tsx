import { useState } from "react";

import { CopyToClickBoard } from "@/components/UI/CopyToClickBoard";
import { Toast } from "@/components/UI/Toast";

import { Typography, TypographyTypes } from "../Typography";

import classes from "./Mail.module.css";

interface IProps {
  children: string;

  className?: string;
}
function Mail({ children, className }: IProps) {
  const [isActiveToast, setIsActiveToast] = useState(false);

  return (
    <CopyToClickBoard onCopy={() => setIsActiveToast(true)} copyText={children}>
      <Toast
        text="Успешно скопировано"
        isActive={isActiveToast}
        onClose={() => setIsActiveToast(false)}
      />
      <Typography className={className} type={TypographyTypes.TEXT_1}>
        <a className={classes.mail}>{children}</a>
      </Typography>
    </CopyToClickBoard>
  );
}
export default Mail;
