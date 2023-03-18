import { memo } from "react";

import { Media } from "@/components/UI/Media";
import Mail from "@/components/UI/Mail";
import Link from "@/components/UI/Link";
import { Spacer } from "@/components/UI/Spacer";

import classes from "./FooterNav.module.css";

function FooterNav() {
  return (
    <Media
      desktopContent={
        <div className={classes.info}>
          <Mail>janstay.ux@gmail.com</Mail>
          <div className={classes.navContainer}>
            <div>
              <div className={classes.nav}>
                <Link href="#">Behance</Link>
                <Link href="#">Telegram</Link>
                <Link href="#">Linkedin</Link>
              </div>
              <Spacer heightDesktop="40px" />
              <div className={classes.nav}>
                <Link href="#">Dribbble</Link>
                <Link href="#">Dprofile</Link>
                <Link href="#">Resume</Link>
              </div>
            </div>
            <Spacer widthDesktop="70px" widthTablet="40px" />
          </div>
        </div>
      }
      mobileContent={
        <div>
          <Mail className={classes.infoMobile}>janstay.ux@gmail.com</Mail>
          <Spacer heightMobile="40px" />
          <div className={classes.navContainerMobile}>
            <div>
              <div className={classes.navMobile}>
                <Link href="#">Behance</Link>
                <Link href="#">Telegram</Link>
                <Link href="#">Linkedin</Link>
              </div>
              <Spacer heightDesktop="40px" />
              <div className={classes.navMobile}>
                <Link href="#">Dribbble</Link>
                <Link href="#">Dprofile</Link>
                <Link href="#">Resume</Link>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default memo(FooterNav);
