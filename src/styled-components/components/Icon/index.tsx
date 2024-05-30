import { styled } from "styled-components";
import Image from "next/image";

type IconProps = {
  imgSrc: string;
  alt: string;
};

const Img = styled(Image)``;

export default function Icon({ imgSrc, alt }: IconProps) {
  return (
    <Img src={`/icons/skills/${imgSrc}`} width={50} height={50} alt={alt} />
  );
}
