import { styled } from "styled-components";

const StyledPage = styled.div`
  position: relative;
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.primaryDefault};
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <StyledPage>{children}</StyledPage>;
}
