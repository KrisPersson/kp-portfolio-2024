import { styled } from "styled-components";

export const ButtonReset = styled.button`
  display: inline-block;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  font-family: ${(props) => props.theme.font.family.main};
  font-weight: ${(props) => props.theme.font.weight.regular};
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
