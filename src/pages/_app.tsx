import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styled-components/layout/global-style";
import theme from "../styled-components/layout/theme";
import StaticSideBar from "@/styled-components/components/StaticSideBar/index";
import Head from "next/head";
import { useState, useEffect } from "react";
import Loader from "../styled-components/components/Loader/index";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
      document.body.classList.remove("loading");
    };

    // Add 'loading' class to body initially
    document.body.classList.add("loading");

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        {loading && <Loader />}
        <main style={{ display: loading ? "none" : "grid" }}>
          <StaticSideBar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
