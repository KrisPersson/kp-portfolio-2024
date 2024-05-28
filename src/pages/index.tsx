import Head from "next/head";
import Image from "next/image";
import Page from "../styled-components/components/Page/index";
import ProfilePicBox from "../styled-components/components/ProfilePicBox/index";
import PageSection from "../styled-components/components/PageSection/index";
import AboutMe from "./Startpage/AboutMe";
import PortfolioSection from "./Startpage/Portfolio";

import { styled } from "styled-components";

const FillerBox = styled.div`
  width: 50vw;
  height: calc(100vh - 50vw);
  background: ${(props) => props.theme.colors.primaryDefault};
  margin-top: 50vw;
`;

const Foreground = styled.div`
  z-index: 2;
  position: relative;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Kristofer Persson Portfolio</title>
        <meta name="description" content="Front-end portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <ProfilePicBox imgSrc="/profil-kp_3.jpg" />
        <ProfilePicBox imgSrc="/profil-kp_3_bw.jpg" />
        <FillerBox />
        <Foreground>
          <PageSection>
            <AboutMe />
            <PortfolioSection />
          </PageSection>
        </Foreground>
      </Page>
    </>
  );
}
