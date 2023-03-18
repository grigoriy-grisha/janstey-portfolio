import React, { memo } from "react";
import Link from "next/link";

import { IconLogo } from "@/components/UI/Icons/IconLogo";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { Media } from "@/components/UI/Media";
import { IconPlus } from "@/components/UI/Icons/IconPlus";
import { IconLogoSmall } from "@/components/UI/Icons/IconLogoSmall";

import classes from "./FooterHeader.module.css";
function FooterHeader() {
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
            <Button type={ButtonTypes.LightBordered}>ABOUT ME</Button>
            <Button type={ButtonTypes.Dark} leftIcon={<IconPlus />}>
              CONTACT A CUSTOMER
            </Button>
          </div>
        </div>
      }
      mobileContent={
        <div className={classes.mobile}>
          <IconLogoSmall />
        </div>
      }
    ></Media>
  );
}

export default memo(FooterHeader);
