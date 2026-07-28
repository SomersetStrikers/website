import { appWithTranslation } from "next-i18next/pages";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
