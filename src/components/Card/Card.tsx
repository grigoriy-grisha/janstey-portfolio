import React from "react";

import useMediaQuery from "@/hooks/useMedia";
import { theme, ThemeColorValues } from "@/utils/theme";
import { Hover } from "@/components/UI/Hover";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { IconArrowRotated } from "@/components/UI/Icons/IconArrowRotated";

import classes from "./Card.module.css";
import Image, { StaticImageData } from "next/image";

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
  const isMobile = useMediaQuery(theme.breakpointQueries.smallMobile);
  const color = lightColor ? theme.colors.white : theme.colors.black;

  return (
    <Hover>
      {(isHover) => (
        <div
          className={classes.container}
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
              className={classes.img}
              src={isMobile ? mobileImageUrl : imageUrl}
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
  );
}
export default Card;
