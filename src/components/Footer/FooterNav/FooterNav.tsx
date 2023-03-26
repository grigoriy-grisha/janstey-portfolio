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
                <Link href="https://www.behance.net/mqux">Behance</Link>
                <Link href="https://t.me/mkuzhen">Telegram</Link>
                <Link href="https://www.linkedin.com/in/janstay-designer-a45259268/">
                  Linkedin
                </Link>
              </div>
              <Spacer heightDesktop="40px" />
              <div className={classes.nav}>
                <Link href="https://www.dribbble.com/janstay">Dribbble</Link>
                <Link href="https://www.dprofile.ru/janstay">Dprofile</Link>
                {/*<Link href="https://www.behance.net/mqux">Resume</Link>*/}
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
                <Link href="https://www.behance.net/mqux">Behance</Link>
                <Link href="https://t.me/mkuzhen">Telegram</Link>
                <Link href="https://www.linkedin.com/in/janstay-designer-a45259268/">
                  Linkedin
                </Link>
              </div>
              <Spacer heightDesktop="40px" />
              <div className={classes.navMobile}>
                <Link href="https://www.dribbble.com/janstay">Dribbble</Link>
                <Link href="https://www.dprofile.ru/janstay">Dprofile</Link>
                {/*<Link href="#">Resume</Link>*/}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default memo(FooterNav);
