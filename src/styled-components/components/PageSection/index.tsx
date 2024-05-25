import { styled } from "styled-components";
import { Container } from "../Container/index";

const Wrapper = styled.section``;

export default function PageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
