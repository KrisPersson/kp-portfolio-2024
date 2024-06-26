import { styled } from "styled-components";

export const Subheading = styled.p<{ $color?: string }>`
  color: ${(props) => props.theme.colors[`${props.$color}`] || "currentColor"};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.large};
  letter-spacing: 1.2px;
  line-height: ${(props) => props.theme.font.lineHeight.alt};
  margin-block: 0.5em 2em;
`;

export const Paragraph = styled.p<{ $color?: string }>`
  color: ${(props) => props.theme.colors[`${props.$color}`] || "currentColor"};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.regular};
  letter-spacing: 0.8px;
  max-width: var(--content-max-width);
  margin-block: 0.5em 2em;
`;
