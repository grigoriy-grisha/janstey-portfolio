import React, { memo, ReactNode } from "react";
import classnames from "classnames";

import { Media } from "@/components/UI/Media";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { Intersect } from "@/components/Intersect";

import classes from "./ExperienceItem.module.css";
import { useTranslation } from "next-i18next";

interface IProps {
  iconContent: ReactNode;
  title: string;

  withButton?: boolean;

  wrapTittleInMobile?: boolean;
}

function ExperienceItem({
  iconContent,
  title,
  withButton,
  wrapTittleInMobile,
}: IProps) {
  const { t } = useTranslation("common");

  return (
    <Intersect oneTimes>
      {(entry, isWasInteresting) => (
        <div
          className={classnames(classes.container, {
            [classes.containerWithButton]: withButton,
            [classes.activeAnimate]: isWasInteresting,
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
                {!withButton || wrapTittleInMobile ? (
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
              {t("openPage")}
            </Button>
          )}
        </div>
      )}
    </Intersect>
  );
}
export default memo(ExperienceItem);
