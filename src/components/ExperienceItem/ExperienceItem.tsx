import React, { memo, ReactNode } from "react";
import classnames from "classnames";

import { Media } from "@/components/UI/Media";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { Button, ButtonTypes } from "@/components/UI/Button";

import classes from "./ExperienceItem.module.css";

interface IProps {
  iconContent: ReactNode;
  title: string;

  withButton?: boolean;
}

function ExperienceItem({ iconContent, title, withButton }: IProps) {
  return (
    <div
      className={classnames(classes.container, {
        [classes.containerWithButton]: withButton,
      })}
    >
      <Media
        desktopContent={
          <div className={classes.content}>
            {iconContent}
            <Typography type={TypographyTypes.H2}>{title}</Typography>
          </div>
        }
        mobileContent={
          <>
            {!withButton ? (
              <div className={classes.mobileContent}>
                {iconContent}
                <Typography type={TypographyTypes.H2}>{title}</Typography>
              </div>
            ) : (
              <div className={classes.content}>
                {iconContent}
                <Typography type={TypographyTypes.H2}>{title}</Typography>
              </div>
            )}
          </>
        }
      ></Media>

      {withButton && (
        <Button className={classes.button} type={ButtonTypes.Transparent}>
          Open page
        </Button>
      )}
    </div>
  );
}
export default memo(ExperienceItem);
