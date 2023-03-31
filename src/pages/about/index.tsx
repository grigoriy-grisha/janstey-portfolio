import React from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { PageContainer } from "@/components/PageContainer";
import { Header } from "@/components/Header";
import { Media } from "@/components/UI/Media";
import { Typography, TypographyTypes } from "@/components/UI/Typography";
import { ExperienceList } from "@/components/ExperienceList";
import { Footer } from "@/components/Footer";
import { FloatingSocialLink } from "@/components/FloatingSocialLink";
import { Spacer } from "@/components/UI/Spacer";
import { HeadApp } from "@/components/HeadApp";

import avaLarge from "src/images/icons/avaLarge.png";
import { IconAvaRu } from "@/components/UI/Icons/IconAvaRu";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadApp />
      <PageContainer>
        <Header />
        <Spacer heightDesktop="84px" />
        <Media
          desktopContent={<IconAvaRu sizeValue="l" />}
          mobileContent={<IconAvaRu sizeValue="m" />}
        />

        <Spacer heightDesktop="44px" />
        <Typography type={TypographyTypes.TEXT_R_1}>
          {t("aboutHello")}
        </Typography>
        <Spacer heightDesktop="120px" />
        <ExperienceList />
        <Footer />
        <FloatingSocialLink bottom="26px" />
      </PageContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
