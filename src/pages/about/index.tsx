import React from "react";
import Image from "next/image";

import { PageContainer } from "@/components/PageContainer";
import { Header } from "@/components/Header";
import { Media } from "@/components/UI/Media";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { ExperienceList } from "@/components/ExperienceList";
import { Footer } from "@/components/Footer";
import { FloatingSocialLink } from "@/components/FloatingSocialLink";
import { Spacer } from "@/components/UI/Spacer";

import avaLarge from "src/images/icons/avaLarge.png";

export default function About() {
  return (
    <PageContainer>
      <Header />
      <Spacer heightDesktop="84px" />
      <Media
        desktopContent={<Image src={avaLarge} alt="janstey" />}
        mobileContent={
          <Image src={avaLarge} width={136} height={136} alt="janstey" />
        }
      ></Media>

      <Spacer heightDesktop="44px" />
      <Typography type={TypographyTypes.TEXT_R_1}>
        Hi, I'm Vladimir, I've been working in design for over 3 years, now I'm
        actively developing as a UX/UI designer
      </Typography>
      <Spacer heightDesktop="120px" />
      <ExperienceList />
      <Footer />
      <FloatingSocialLink bottom="26px" />
    </PageContainer>
  );
}
