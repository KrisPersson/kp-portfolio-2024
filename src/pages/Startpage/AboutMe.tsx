import { styled } from "styled-components";
import { Container } from "../../styled-components/components/Container/index";
import { H2, H3 } from "../../styled-components/components/Heading/index";
import {
  Subheading,
  Paragraph,
} from "../../styled-components/components/Paragraph/index";
import ContentBox from "../../styled-components/components/ContentBox/index";

export default function AboutMe() {
  return (
    <>
      <ContentBox
        id="about-me"
        aria-label="About me"
        color="secondaryDefault"
        background="primaryDefault"
        reveal
      >
        <H2>About Me</H2>
        <Subheading>
          I build websites from start to finish - from design, to front-end, to
          back-end, using modern full-stack technology and architecture.
        </Subheading>
        <H3>Technical</H3>
        <Paragraph>
          I primarily use front-end frameworks like React/NextJS and back-end
          cloud solutions with NodeJS and AWS/Serverless. I love to solve
          problems generally, and as part of my internship I built a
          Figma-plugin that exports full designs to CSS/Sass-variables and/or
          JS-themes to make the UX-FE transitions as seamless as possible.
        </Paragraph>
      </ContentBox>
      <ContentBox
        id="background"
        aria-label="Background"
        color="black"
        background="white"
        slide
      >
        <H3 $color="black">Background</H3>
        <Paragraph $color="black">
          I am 37, grew up in Gävle, Sweden. Via Los Angeles and a decade-long
          career in music, I now live in Gothenburg where I have recently
          graduated from my studies at Folkuniversitetet’s Javascript-Developer
          program, as well as my internship at OurStudio.{" "}
          <a
            style={{ color: "currentColor" }}
            href="mailto:krisperssonmusic@gmail.com"
          >
            Drop me an email
          </a>{" "}
          for references!
        </Paragraph>
        <H3 $color="black">Personal</H3>
        <Paragraph $color="black">
          I love coffee, sports, music, and my dog Jackson.
        </Paragraph>
      </ContentBox>
    </>
  );
}
