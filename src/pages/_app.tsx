import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styled-components/layout/global-style";
import theme from "../styled-components/layout/theme";
import StaticSideBar from "@/styled-components/components/StaticSideBar/index";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />

        <StaticSideBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
