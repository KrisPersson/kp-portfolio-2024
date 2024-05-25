import { styled } from "styled-components";
import { H1 } from "../Heading/index";
import { ButtonPrimary } from "../ButtonPrimary/index";
import { size } from "../../layout/helpers";
import { Container } from "../Container/index";

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
  gap: ${size(3)};

  grid-template-rows: 1fr auto 1fr;
`;

export default function StaticSideBar() {
  return (
    <Wrapper>
      <Inner>
        <H1 $color="primaryDefault">Front-End Developer</H1>
        <Content>
          <SubHeading>
            My name is Kristofer. I build websites using modern Front-End
            technologies.
          </SubHeading>
          <ButtonPrimary>Let’s work together!</ButtonPrimary>
        </Content>
      </Inner>
    </Wrapper>
  );
}
