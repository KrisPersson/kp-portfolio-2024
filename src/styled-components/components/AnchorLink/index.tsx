import { styled } from "styled-components";
import { ButtonReset } from "../../layout/reset";
import { size } from "../../layout/helpers";
import Link from "next/link";

export const AnchorLink = styled(Link)`
  color: ${(props) => props.theme.colors.tertiaryDarker};
  letter-spacing: 1.2px;
  &:hover {
    animation: button 100ms forwards;
  }
`;
