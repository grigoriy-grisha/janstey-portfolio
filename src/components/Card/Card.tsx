import React from "react";
import Image, { StaticImageData } from "next/image";
import { theme, ThemeColorValues } from "@/utils/theme";
import { Hover } from "@/components/UI/Hover";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { IconArrowRotated } from "@/components/UI/Icons/IconArrowRotated";
import { Intersect } from "@/components/Intersect";

import classes from "./Card.module.css";
import classnames from "classnames";

interface IProps {
  textName: string;
  textMain: string;
  imageUrl: string | StaticImageData;
  mobileImageUrl: string | StaticImageData;
  background: ThemeColorValues;
  lightColor?: boolean;
}
function Card({
  textName,
  textMain,
  imageUrl,
  mobileImageUrl,
  lightColor,
  background,
}: IProps) {
  const color = lightColor ? theme.colors.white : theme.colors.black;

  return (
    <Intersect oneTimes>
      {(entry, isWasInteresting) => (
        <Hover>
          {(isHover) => (
            <div
              className={classnames(classes.container, {
                [classes.visible]: isWasInteresting,
              })}
              style={{ backgroundColor: background }}
            >
              <div className={classes.containerText}>
                <Typography type={TypographyTypes.TEXT_2} color={color}>
                  {textName}
                </Typography>
                <Typography
                  className={classes.text}
                  type={TypographyTypes.H3}
                  color={color}
                >
                  {textMain}
                </Typography>
              </div>
              <div className={classes.imgContainer}>
                <Image
                  style={{ height: "auto", width: "100%" }}
                  className={classnames(classes.img, classes.largeImg)}
                  src={imageUrl}
                  alt="janstay"
                />
                <Image
                  style={{ height: "auto", width: "100%" }}
                  className={classnames(classes.img, classes.smallImg)}
                  src={mobileImageUrl}
                  alt="janstay"
                />
              </div>

              <Button
                rotateRightButton
                activeForceHover={isHover}
                className={classes.button}
                type={ButtonTypes.Light}
                rightIcon={<IconArrowRotated />}
              >
                OPEN CASE
              </Button>
            </div>
          )}
        </Hover>
      )}
    </Intersect>
  );
}
export default Card;
