import classes from "./Toast.module.css";
import classnames from "classnames";
import { useEffect, useRef } from "react";
import { Typography, TypographyTypes } from "@/components/UI/Typography";

interface IProps {
  text: string;
  isActive: boolean;
  onClose: () => void;
}

function Toast({ text, isActive, onClose }: IProps) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (isActive) {
      const id = setTimeout(() => {
        onCloseRef.current();
      }, 3000);

      return () => clearTimeout(id);
    }
  }, [isActive]);

  return (
    <span className={classnames(classes.toast, { [classes.active]: isActive })}>
      <Typography type={TypographyTypes.TEXT_3}>{text}</Typography>
    </span>
  );
}

export default Toast;
