import { IconLogo } from "@/components/UI/Icons/IconLogo";
import { IconPlus } from "@/components/UI/Icons/IconPlus";
import { Button, ButtonTypes } from "@/components/UI/Button";
import { Media } from "@/components/UI/Media";

import classes from "./Header.module.css";
import { MobileMenu } from "./MobileMenu";
import React from "react";
import Link from "next/link";

function Header() {
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
              <Button type={ButtonTypes.LightBordered}>ABOUT ME</Button>
            </Link>
            <Button type={ButtonTypes.Dark} leftIcon={<IconPlus />}>
              CONTACT A CUSTOMER
            </Button>
          </div>
        </div>
      }
      mobileContent={<MobileMenu />}
    ></Media>
  );
}

export default Header;
