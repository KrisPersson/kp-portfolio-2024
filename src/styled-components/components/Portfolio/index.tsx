import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import { PORTFOLIO, PortfolioItem } from "./data";
import { H4 } from "../Heading/index";
import { Paragraph } from "../Paragraph/index";
import Link from "next/link";
import { Browser, FileCode } from "@phosphor-icons/react";

const Wrapper = styled.div`
  position: relative;
  margin-inline: var(--ignore-gutter);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${size(35.5)}, 1fr));
  gap: 4px;
  padding-inline: 4px;
  margin-block: ${size(6)};
  ${(props) => props.theme.breakpoint.Xlg} {
    margin-inline: unset;
  }
`;

const LinkItem = styled(Link).attrs((props) => ({
  target: "_blank",
}))`
  display: flex;
  gap: ${size(1)};
  cursor: pointer;
  flex: 1 1 100%;
  font-size: ${(props) => props.theme.font.size.regular};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  vertical-align: bottom;
  align-items: flex-end;

  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled(H4)`
  font-size: ${(props) => props.theme.font.size.regular};
`;

const Card = styled.article<{ $label?: string }>`
  min-height: ${size(37.5)};
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${size(1.5)};
  padding: ${size(5)};
  position: relative;
`;

const Description = styled(Paragraph)`
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.colors.darkGrey};
  max-width: 40ch;
  letter-spacing: 0.7px;
`;

const LinksWrapper = styled.div`
  display: flex;
`;

type PortfolioProps = {
  portfolio?: PortfolioItem[];
};

export default function Portfolio({ portfolio }: PortfolioProps) {
  const source = portfolio || PORTFOLIO;
  const items = source.map((item, i) => {
    return (
      <Card $label={item.label} key={i}>
        <Title>{item.label}</Title>
        <Description>{item.description}</Description>
        <LinksWrapper>
          <LinkItem href={item.hrefUi}>
            <Browser size={32} color="currentColor" />
            UI
          </LinkItem>
          <LinkItem href={item.hrefCode}>
            <FileCode size={32} color="currentColor" />
            Code
          </LinkItem>
        </LinksWrapper>
      </Card>
    );
  });

  return <Wrapper id="Portfolio">{items}</Wrapper>;
}
