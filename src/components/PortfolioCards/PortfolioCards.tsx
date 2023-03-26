import React from "react";

import { Card } from "@/components/Card";
import Moonbirds from "@/images/backgrounds/Moonbirds.png";
import MeBeats from "@/images/backgrounds/MeBeats.png";
import Stormex from "@/images/backgrounds/Stormex.png";
import Roki from "@/images/backgrounds/Roki.png";
import MoonbirdsMobile from "@/images/backgrounds/MoonbirdsMobile.png";
import MeBeatsMobile from "@/images/backgrounds/MeBeatsMobile.png";
import StormexMobile from "@/images/backgrounds/StormexMobile.png";
import RokiMobile from "@/images/backgrounds/RokiMobile.png";
import { theme } from "@/utils/theme";

import classes from "./PortfolioCards.module.css";
function PortfolioCards() {
  return (
    <div className={classes.container}>
      <Card
        href="https://www.behance.net/gallery/163636045/Website-Redesign-Moonbirds-landing-page"
        background={theme.colors.blueBackground}
        imageUrl={Moonbirds}
        mobileImageUrl={MoonbirdsMobile}
        textMain={"Landing page, \nNFT collection, \nRedesign"}
        textName="Moonbirds"
      />
      <Card
        href="https://www.behance.net/gallery/163834435/MeBeats-is-the-best-music-mobile-app-for-you"
        background={theme.colors.grayBackground}
        imageUrl={MeBeats}
        mobileImageUrl={MeBeatsMobile}
        textMain={"The best\nmusic mobile\napp for you"}
        textName="MeBeats"
      />
      <Card
        href="https://www.behance.net/gallery/162405011/Stormex-best-cryptocurrency-exchanger-landing-page"
        background={theme.colors.blackBackground}
        lightColor
        imageUrl={Stormex}
        mobileImageUrl={StormexMobile}
        textMain={"Cryptocurrency\nExchanger,\nLanding page"}
        textName="Stormex"
      />

      <Card
        href="https://www.behance.net/gallery/163522665/Website-Redesign-Roki-minimal-landing-page"
        background={theme.colors.orangeBackground}
        lightColor
        imageUrl={Roki}
        mobileImageUrl={RokiMobile}
        textMain={"Restaurant,\nLanding page,\nMinimal style"}
        textName="Roki"
      />
    </div>
  );
}
export default PortfolioCards;
