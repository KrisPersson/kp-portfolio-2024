import { styled } from "styled-components";
import { Container } from "../Container/index";
import { size } from "../../layout/helpers";

const Wrapper = styled.div<{ $color?: string; $background?: string }>`
  color: ${(props) =>
    props.theme.colors[props.$color] || props.theme.colors.black};
  background: ${(props) =>
    props.theme.colors[props.$background] || props.theme.colors.white};
  position: sticky;
  top: 0;
  min-height: 50vh;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size(3.25)};
  padding-block: ${size(12)};
`;

export default function ContentBox({
  children,
  color,
  background,
}: {
  children: React.ReactNode;
  color: string;
  background: string;
}) {
  return (
    <Wrapper $color={color} $background={background}>
      <Container>
        <Inner>{children}</Inner>
      </Container>
    </Wrapper>
  );
}
