import { styled } from "styled-components";
import { Container } from "../../styled-components/components/Container/index";
import { H2, H3 } from "../../styled-components/components/Heading/index";
import {
  Subheading,
  Paragraph,
} from "../../styled-components/components/Paragraph/index";
import ContentBox from "../../styled-components/components/ContentBox/index";
import Portfolio from "../../styled-components/components/Portfolio/index";
import Skills from "../../styled-components/components/Skills/index";
import { SKILLS } from "../../styled-components/components/Skills/data";

export default function PortfolioSection() {
  return (
    <>
      <ContentBox
        id="portfolio"
        aria-label="Portfolio"
        color="white"
        background="secondaryDefault"
        slide
      >
        <H2>Portfolio</H2>
        <Subheading>
          Here is a collection of projects I have been working on recently. They
          all utilize different tools, frameworks, and technologies, but they
          are all based on essentially HTML, CSS, and Javascript at the core.
        </Subheading>
        <Portfolio />
        <H3>Skills / Tools</H3>
        <Skills skillsData={SKILLS} />
      </ContentBox>
    </>
  );
}
