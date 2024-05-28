import { styled } from "styled-components";
import { H1 } from "../Heading/index";
import { ButtonPrimary } from "../ButtonPrimary/index";
import { size } from "../../layout/helpers";
import IconLink from "../IconLink/index";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size(6)};
`;
const SubHeading = styled.div`
  font-size: ${(props) => props.theme.font.size.large};
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 1.2px;
`;
const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.secondaryDefault};
  grid-column: 1 / span 1;
  max-width: 50vw;
  min-width: 50vw;

  position: fixed;
  left: 0;
  top: 0;

  ${H1} {
    grid-row: 2 / span 1;
  }
  ${Content} {
    grid-row: 3 / span 1;
    max-width: 50ch;
  }
`;

const Inner = styled.div`
  padding: var(--gutter);
  display: grid;
  height: 100vh;
  width: fit-content;
  margin: 0 auto;
  gap: ${size(3)};

  grid-template-rows: 1fr auto 1fr;
`;

const TopLinks = styled.div`
  position: absolute;
  left: ${size(5)};
  top: ${size(5)};
  display: flex;
  gap: ${size(2)};
`;

export default function StaticSideBar() {
  return (
    <Wrapper>
      <TopLinks>
        <IconLink hrefSrc="https://github.com/KrisPersson" imgSrc="github" />
        <IconLink
          hrefSrc="https://www.linkedin.com/in/krispersson/"
          imgSrc="linkedin"
        />
      </TopLinks>
      <Inner>
        <H1 $color="primaryDefault">Web Developer</H1>
        <Content>
          <SubHeading>
            My name is Kristofer. I build websites using modern Front-End
            technologies like NextJS and React.
          </SubHeading>
          <ButtonPrimary>
            <a
              style={{ textDecoration: "none", color: "currentColor" }}
              href="mailto:krisperssonmusic@gmail.com"
            >
              Let’s work together!
            </a>
          </ButtonPrimary>
        </Content>
      </Inner>
    </Wrapper>
  );
}
