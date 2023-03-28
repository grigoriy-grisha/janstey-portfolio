import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { IconLogo } from "@/components/UI/Icons/IconLogo";
import { IconPlus } from "@/components/UI/Icons/IconPlus";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { Media } from "@/components/UI/Media";

import classes from "./Header.module.css";
import { MobileMenu } from "./MobileMenu";

function Header() {
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
      mobileContent={<MobileMenu />}
    />
  );
}

export default Header;
