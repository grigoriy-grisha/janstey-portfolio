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
        background={theme.colors.blueBackground}
        imageUrl={Moonbirds}
        mobileImageUrl={MoonbirdsMobile}
        textMain={"Landing page, \nNFT collection, \nRedesign"}
        textName="Moonbirds"
      />
      <Card
        background={theme.colors.grayBackground}
        imageUrl={MeBeats}
        mobileImageUrl={MeBeatsMobile}
        textMain={"The best\nmusic mobile\napp for you"}
        textName="MeBeats"
      />
      <Card
        background={theme.colors.blackBackground}
        lightColor
        imageUrl={Stormex}
        mobileImageUrl={StormexMobile}
        textMain={"Cryptocurrency\nExchanger,\nLanding page"}
        textName="Stormex"
      />
      <Card
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
