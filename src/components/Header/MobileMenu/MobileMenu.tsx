import classnames from "classnames";

import { IconLogoSmall } from "@/components/UI/Icons/IconLogoSmall";
import { PageContainer } from "@/components/PageContainer";
import { IconClose } from "@/components/UI/Icons/IconClose";
import { Spacer } from "@/components/UI/Spacer";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { IconPlus } from "@/components/UI/Icons/IconPlus";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { theme } from "@/utils/theme";

import classes from "./MobileMenu.module.css";
import classesHeader from "../Header.module.css";

import { Burger } from "./Burger";
import React, { memo, useEffect, useState } from "react";
import Link from "next/link";

const paddings = { paddingTop: 12, paddingBottom: 12 };
function MobileMenu() {
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
              <Button type={ButtonTypes.DarkBordered} fullWidth>
                ABOUT ME
              </Button>
              <Button
                type={ButtonTypes.Light}
                leftIcon={<IconPlus />}
                fullWidth
              >
                CONTACT A CUSTOMER
              </Button>
              <Button type={ButtonTypes.Light} fullWidth>
                BEHANCE
              </Button>
              <Button type={ButtonTypes.Light} fullWidth>
                TELEGRAM
              </Button>
            </div>
            <Typography
              className={classes.translate}
              color={theme.colors.white}
              type={TypographyTypes.TEXT_REGULAR_3}
            >
              На русский
            </Typography>
          </PageContainer>
        </div>
      </div>
    </div>
  );
}

export default memo(MobileMenu);
