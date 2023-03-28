import React, { memo } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { IconLogo } from "@/components/UI/Icons/IconLogo";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { Media } from "@/components/UI/Media";
import { IconPlus } from "@/components/UI/Icons/IconPlus";
import { IconLogoSmall } from "@/components/UI/Icons/IconLogoSmall";

import classes from "./FooterHeader.module.css";

function FooterHeader() {
  const { t } = useTranslation("common");
  return (
    <Media
      desktopContent={
        <div
          style={{ paddingTop: 16, paddingBottom: 16 }}
          className={classes.header}
        >
          <Link href="/">
            <IconLogo />
          </Link>
          <div className={classes.buttons}>
            <Link href="/about">
              <Button type={ButtonTypes.LightBordered}>{t("about")}</Button>
            </Link>
            <Link href="https://t.me/mkuzhen" target="_blank">
              <Button type={ButtonTypes.Dark} leftIcon={<IconPlus />}>
                {t("contact_customer")}
              </Button>
            </Link>
          </div>
        </div>
      }
      mobileContent={
        <div className={classes.mobile}>
          <Link href="/">
            <IconLogoSmall />
          </Link>
        </div>
      }
    />
  );
}

export default memo(FooterHeader);
