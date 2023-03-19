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

import avaLarge from "src/images/icons/avaLarge.png";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <PageContainer>
      <Header />
      <Spacer heightDesktop="84px" />
      <Media
        desktopContent={<Image src={avaLarge} alt="janstey-ava" />}
        mobileContent={
          <Image src={avaLarge} width={136} height={136} alt="janstey-ava" />
        }
      />

      <Spacer heightDesktop="44px" />
      <Typography type={TypographyTypes.TEXT_R_1}>{t("aboutHello")}</Typography>
      <Spacer heightDesktop="120px" />
      <ExperienceList />
      <Footer />
      <FloatingSocialLink bottom="26px" />
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});