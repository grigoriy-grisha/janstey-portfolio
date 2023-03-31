import "@/styles/globals.css";
import "normalize.css";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { Preloader } from "@/components/Preloader";

export default appWithTranslation(function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Preloader />
      <Component {...pageProps} />
    </>
  );
});
