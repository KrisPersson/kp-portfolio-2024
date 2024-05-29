import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

type IconLinkProps = {
  hrefSrc: string;
  imgSrc: string;
};

const Wrapper = styled(Link)`
  &:hover {
    animation: button 100ms forwards;
  }
`;
const Icon = styled(Image)``;

export default function IconLink({ hrefSrc, imgSrc }: IconLinkProps) {
  return (
    <Wrapper href={hrefSrc} target="_blank">
      <Icon src={`/icons/${imgSrc}.svg`} width={48} height={48} alt="logo" />
    </Wrapper>
  );
}
