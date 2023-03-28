import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import OG from "@/images/og/OG.jpg";

function HeadApp() {
  const { t } = useTranslation("common");

  return (
    <Head>
      <title>{String(t("jansteyName"))}</title>
      <meta name="description" content={String(t("mainText"))} key="desc" />
      <meta property="og:title" content={String(t("jansteyName"))} />
      <meta property="og:description" content={String(t("mainText"))} />
      <meta property="og:image" content={OG.src} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
export default HeadApp;
