import "@/styles/globals.css";
import "@/styles/inter.css";
import "normalize.css";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { createMedia } from "@artsy/fresnel";

export default appWithTranslation(function App({
  Component,
  pageProps,
}: AppProps) {
  return <Component {...pageProps} />;
});
