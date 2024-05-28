import { styled } from "styled-components";

export const H1 = styled.h1<{ $color?: string }>`
  color: ${(props) => props.theme.colors[`${props.$color}`] || "currentColor"};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.xxxlarge};
  letter-spacing: 3.84px;
`;

export const H2 = styled.h2<{ $color?: string }>`
  color: ${(props) => props.theme.colors[`${props.$color}`] || "currentColor"};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.xxlarge};
`;

export const H3 = styled.h3<{ $color?: string }>`
  color: ${(props) => props.theme.colors[`${props.$color}`] || "currentColor"};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.large};
`;

export const H4 = styled.h3<{ $color?: string }>`
  color: ${(props) => props.theme.colors[`${props.$color}`] || "currentColor"};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.small};
  letter-spacing: 1px;
`;
