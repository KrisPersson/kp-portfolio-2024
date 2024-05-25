import { styled } from "styled-components";
import { ButtonReset } from "../../layout/reset";

export const ButtonPrimary = styled(ButtonReset)`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.secondaryDefault};
  border: 1.5px solid ${(props) => props.theme.colors.white};
  border-radius: 100vmax;
  font-size: ${(props) => props.theme.font.size.xlarge};
  padding: 1em 2em;
  letter-spacing: 1.2px;
  max-width: fit-content;
  white-space: nowrap;
  box-shadow: 2px 2px 40px rgba(40, 40, 40, 0.1);
`;
