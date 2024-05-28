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
      <ContentBox color="secondaryDefault" background="primaryDefault">
        <H2>About Me</H2>
        <Subheading>
          I enjoy working closely with design teams to faithfully translate
          their designs down to the last pixel. Daily, I use modern front-end
          technologies that bring the creative process to life, just as
          designers intended them to be.
        </Subheading>
        <H3>Technical</H3>
        <Paragraph>
          I primarily use front-end frameworks like React/NextJS and
          style-solutions like Sass, Styled Components, CSS Modules, and
          CSS-in-JS. I love problem-solving generally, and as part of my
          internship I built a Figma-plugin that exports full designs to
          CSS/Sass-variables and/or JS-themes to make the UX-FE transitions as
          seamless as possible.
        </Paragraph>
      </ContentBox>
      <ContentBox color="black" background="white">
        <H3 $color="black">Background</H3>
        <Paragraph $color="black" style={{ marginBottom: "52px" }}>
          I am 37, grew up in Gävle, currently living in Gothenburg. I lived in
          Los Angeles for 11 years where I studied and worked as a musician.
          During the pandemic I decided I wanted to make a career-switch to
          development, and I am currently finishing up my studies at
          Folkuniversitetet’s Javascript-Developer program, as well as my
          internship at OurStudio. Drop me an email for references!
        </Paragraph>
        <H3 $color="black">Personal</H3>
        <Paragraph $color="black">
          I love coffee, sports, music, and my dog Jackson.
        </Paragraph>
      </ContentBox>
    </>
  );
}
