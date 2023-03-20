import { Html, Head, Main, NextScript } from "next/document";

import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import i18nextConfig from "../../next-i18next.config";

export default function Document(props: any) {
  const { t } = useTranslation("common");

  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="description" content={String(t("mainText"))} key="desc" />
        <meta property="og:title" content={String(t("jansteyName"))} />
        <meta property="og:description" content={String(t("mainText"))} />
        <meta
          property="og:image"
          content="blob:https://web.telegram.org/2eb4db3b-0f0d-4dd3-b2fc-0a63002be7e0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
