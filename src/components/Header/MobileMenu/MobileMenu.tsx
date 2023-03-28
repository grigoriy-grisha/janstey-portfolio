import React, { memo, useEffect, useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { IconLogoSmall } from "@/components/UI/Icons/IconLogoSmall";
import { PageContainer } from "@/components/PageContainer";
import { IconClose } from "@/components/UI/Icons/IconClose";
import { Spacer } from "@/components/UI/Spacer";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { IconPlus } from "@/components/UI/Icons/IconPlus";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";
import useChangeToLocate from "@/hooks/useChangeToLocate";

import classes from "./MobileMenu.module.css";
import classesHeader from "../Header.module.css";

import { Burger } from "./Burger";

const paddings = { paddingTop: 12, paddingBottom: 12 };
function MobileMenu() {
  const { changeTo, currentRoute } = useChangeToLocate();
  const { t } = useTranslation("common");

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div style={paddings} className={classesHeader.header}>
        <Link href="/">
          <IconLogoSmall />
        </Link>
        <Burger onClick={() => setIsActive(true)} isActive={isActive} />
      </div>
      <div
        className={classnames(classesHeader.mobileMenu, {
          [classesHeader.active]: isActive,
        })}
      >
        <div className={classes.menuContainer}>
          <PageContainer>
            <div style={paddings} className={classesHeader.header}>
              <IconLogoSmall fill="white" />
              <span onClick={() => setIsActive(false)}>
                <IconClose />
              </span>
            </div>
            <Spacer heightDesktop="44px" />
            <div className={classes.buttons}>
              <Link href="/about" onClick={() => setIsActive(false)}>
                <Button fullWidth type={ButtonTypes.DarkBordered}>
                  {t("about")}
                </Button>
              </Link>
              <Link href="https://t.me/mkuzhen" target="_blank">
                <Button
                  type={ButtonTypes.Light}
                  leftIcon={<IconPlus />}
                  fullWidth
                >
                  {t("contact_customer")}
                </Button>
              </Link>
              <Link href="https://www.behance.net/mqux" target="_blank">
                <Button type={ButtonTypes.Light} fullWidth>
                  Behance
                </Button>
              </Link>
              <Link href="https://t.me/mkuzhen" target="_blank">
                <Button type={ButtonTypes.Light} fullWidth>
                  Telegram
                </Button>
              </Link>
            </div>
            <Link href={currentRoute} locale={changeTo}>
              <Typography
                className={classes.translate}
                color={theme.colors.white}
                type={TypographyTypes.TEXT_REGULAR_3}
              >
                {t("translate")}
              </Typography>
            </Link>
          </PageContainer>
        </div>
      </div>
    </div>
  );
}

export default memo(MobileMenu);
