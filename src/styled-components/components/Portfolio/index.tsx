import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import { PORTFOLIO, PortfolioItem } from "./data";
import { H4 } from "../Heading/index";
import { Paragraph } from "../Paragraph/index";
import Link from "next/link";
import Image from "next/image";
import { Browser, FileCode } from "@phosphor-icons/react";

const DescImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @container (min-width: 475px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-inline: var(--ignore-gutter);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${size(44)}, 1fr));
  gap: 4px;
  padding-inline: 4px;
  margin-block: ${size(6)};
  ${(props) => props.theme.breakpoint.Xlg} {
    margin-inline: unset;
  }
  ${(props) => props.theme.breakpoint.LtXsm} {
    grid-template-columns: 1fr;
  }
`;

const LinkItem = styled(Link).attrs((props) => ({
  target: "_blank",
}))`
  display: flex;
  gap: ${size(1)};
  cursor: pointer;
  flex: 1 1 100%;
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  vertical-align: bottom;
  align-items: flex-end;
  opacity: 0.7;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.9;
  }
`;

const Title = styled(H4)`
  font-size: ${(props) => props.theme.font.size.large};
  margin-top: 0;
  margin-bottom: ${size(3)};
`;

const Card = styled.article<{ $label?: string }>`
  min-height: ${size(37.5)};
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  gap: ${size(1.5)};
  padding-inline: var(--gutter);
  padding-block: ${size(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  container-type: inline-size;

  ${(props) => props.theme.breakpoint.Md} {
    padding-inline: ${size(4)};
  }
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
  margin-top: auto;
`;

const MockDeviceMobile = styled(Image)`
  position: absolute;
  top: var(--mock-dev-offset);
  left: 0;
  margin-bottom: 0;
`;

const MockDeviceDesktop = styled(Image)`
  object-fit: contain;
  margin-bottom: 0;
  margin-inline: auto;
`;

const MockDeviceContainer = styled.div`
  position: relative;
  align-self: center;
  min-width: 295px;
  max-width: 295px;
  display: flex;
  margin-bottom: var(--mock-dev-offset);
  cursor: pointer;

  ${(props) => props.theme.breakpoint.LtXsm} {
    min-width: 280px;
  }
`;

type PortfolioProps = {
  portfolio?: PortfolioItem[];
};

function handleClickMockup(url: string) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("target", "_blank");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Portfolio({ portfolio }: PortfolioProps) {
  const source = portfolio || PORTFOLIO;

  const items = source.map((item, i) => {
    return (
      <Card $label={item.label} key={i}>
        <Title>{item.label}</Title>
        <DescImgWrapper>
          {item.mockImgName && (
            <MockDeviceContainer onClick={() => handleClickMockup(item.hrefUi)}>
              <MockDeviceDesktop
                src={`/photos/portfolio/${item.mockImgName}_desktop.png`}
                width={251}
                height={155}
                alt={`Desktop screenshot of ${item.label}.`}
              />
              <MockDeviceMobile
                src={`/photos/portfolio/${item.mockImgName}_mobile.png`}
                width={75}
                height={141}
                alt={`Mobile screenshot of ${item.label}.`}
              />
            </MockDeviceContainer>
          )}

          <Description>{item.description}</Description>
        </DescImgWrapper>
        <LinksWrapper>
          <LinkItem href={item.hrefUi}>
            <Browser size={35} color="currentColor" />
            UI
          </LinkItem>
          <LinkItem href={item.hrefCode}>
            <FileCode size={35} color="currentColor" />
            Code
          </LinkItem>
        </LinksWrapper>
      </Card>
    );
  });

  return <Wrapper id="Portfolio">{items}</Wrapper>;
}
