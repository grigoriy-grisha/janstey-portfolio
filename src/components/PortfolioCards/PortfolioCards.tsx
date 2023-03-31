import React from "react";

import { Card } from "@/components/Card";
import Moonbirds from "@/images/backgrounds/dekstop_moonbirds.webp";
import MeBeats from "@/images/backgrounds/dekstop_mebeats.webp";
import Stormex from "@/images/backgrounds/dekstop_stormex.webp";
import Roki from "@/images/backgrounds/dekstop_roki.webp";

import MoonbirdsTablet from "@/images/backgrounds/table_moonbirds.webp";
import MeBeatsTablet from "@/images/backgrounds/table_mebeats.webp";
import StormexTablet from "@/images/backgrounds/table_stormex.webp";
import RokiTablet from "@/images/backgrounds/table_roki.webp";

import MoonbirdsMobile from "@/images/backgrounds/mobile_moonbirds.webp";
import MeBeatsMobile from "@/images/backgrounds/mobile_mebeats.webp";
import StormexMobile from "@/images/backgrounds/mobile_stormex.webp";
import RokiMobile from "@/images/backgrounds/mobile_roki.webp";

import { theme } from "@/utils/theme";

import classes from "./PortfolioCards.module.css";
function PortfolioCards() {
  return (
    <div className={classes.container}>
      <Card
        href="https://www.behance.net/gallery/163636045/Website-Redesign-Moonbirds-landing-page"
        background={theme.colors.blueBackground}
        imageUrl={Moonbirds}
        tabletImageUrl={MoonbirdsTablet}
        mobileImageUrl={MoonbirdsMobile}
        textMain={"Landing page, \nNFT collection, \nRedesign"}
        textName="Moonbirds"
      />
      <Card
        href="https://www.behance.net/gallery/163834435/MeBeats-is-the-best-music-mobile-app-for-you"
        background={theme.colors.grayBackground}
        imageUrl={MeBeats}
        tabletImageUrl={MeBeatsTablet}
        mobileImageUrl={MeBeatsMobile}
        textMain={"The best\nmusic mobile\napp for you"}
        textName="MeBeats"
      />
      <Card
        href="https://www.behance.net/gallery/162405011/Stormex-best-cryptocurrency-exchanger-landing-page"
        background={theme.colors.blackBackground}
        lightColor
        imageUrl={Stormex}
        tabletImageUrl={StormexTablet}
        mobileImageUrl={StormexMobile}
        textMain={"Cryptocurrency\nExchanger,\nLanding page"}
        textName="Stormex"
      />

      <Card
        href="https://www.behance.net/gallery/163522665/Website-Redesign-Roki-minimal-landing-page"
        background={theme.colors.orangeBackground}
        lightColor
        imageUrl={Roki}
        tabletImageUrl={RokiTablet}
        mobileImageUrl={RokiMobile}
        textMain={"Restaurant,\nLanding page,\nMinimal style"}
        textName="Roki"
      />
    </div>
  );
}
export default PortfolioCards;
