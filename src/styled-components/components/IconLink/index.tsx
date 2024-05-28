import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { size } from "../../layout/helpers";

type IconLinkProps = {
  hrefSrc: string;
  imgSrc: string;
};

const Wrapper = styled(Link)`
  &:hover {
    opacity: 0.7;
  }
`;
const Icon = styled(Image)``;

export default function IconLink({ hrefSrc, imgSrc }: IconLinkProps) {
  return (
    <Wrapper href={hrefSrc} target="_blank">
      <Icon src={`/icons/${imgSrc}.svg`} width={35} height={35} alt="logo" />
    </Wrapper>
  );
}
