import { styled } from "styled-components";
import { ButtonReset } from "../../layout/reset";
import { size } from "../../layout/helpers";

export const ButtonPrimary = styled(ButtonReset)<{
  $size?: string;
  $href?: string;
}>`
  color: ${(props) => props.theme.colors.secondaryDefault};
  background: ${(props) => props.theme.colors.tertiaryDefault};
  border-radius: 100vmax;
  font-size: ${(props) => props.theme.font.size[`${props.$size || "large"}`]};
  padding: 1em 2em;
  letter-spacing: 1.2px;
  max-width: fit-content;
  white-space: nowrap;
  box-shadow: 2px 2px 40px rgba(40, 40, 40, 0.1);
  right: ${size(5)};
  &:hover {
    animation: button 100ms forwards;
  }

  ${(props) => props.theme.breakpoint.LtXsm} {
    right: ${size(1.5)};
  }
`;

export const ButtonSecondary = styled(ButtonReset)<{
  $size?: string;
  $href?: string;
}>`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.secondaryDefault};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 100vmax;
  font-size: ${(props) => props.theme.font.size[`${props.$size || "large"}`]};
  padding: 1em 2em;
  letter-spacing: 1.2px;
  max-width: fit-content;
  white-space: nowrap;
  box-shadow: 2px 2px 40px rgba(40, 40, 40, 0.1);
  right: ${size(5)};
  &:hover {
    animation: button 100ms forwards;
  }

  ${(props) => props.theme.breakpoint.LtXsm} {
    right: ${size(1.5)};
  }
`;
