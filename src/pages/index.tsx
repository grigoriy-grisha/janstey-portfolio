import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PageContainer } from "@/components/PageContainer";
import { Header } from "@/components/Header";
import { Spacer } from "@/components/UI/Spacer";
import { JanstayHello } from "@/components/JanstayHello";
import { MainText } from "@/components/MainText";
import { PortfolioCards } from "@/components/PortfolioCards";
import { Footer } from "@/components/Footer";
import { FloatingSocialLink } from "@/components/FloatingSocialLink";
import { HeadApp } from "@/components/HeadApp";

export default function Home() {
  return (
    <>
      <HeadApp />
      <PageContainer>
        <Header />
        <Spacer heightDesktop="86px" />
        <JanstayHello />
        <Spacer heightDesktop="20px" />
        <MainText />
        <Spacer heightDesktop="60px" />
        <PortfolioCards />
        <Spacer heightDesktop="240px" heightMobile="160px" />
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
