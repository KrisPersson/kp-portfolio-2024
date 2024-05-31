import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import Image from "next/image";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vw;

  &::after {
    content: "";
    inset: 0px;
    background: ${(props) => props.theme.colors.primaryDefault};
    opacity: 0.25;
    position: absolute;
  }

  & + & {
    display: none;
  }
  ${(props) => props.theme.breakpoint.Sm} {
    width: 50vw;
    height: 50vw;
    position: relative;

    & + & {
      display: block;
      position: absolute;
      right: 0;
    }
  }
  ${(props) => props.theme.breakpoint.Md} {
    width: 25vw;
    height: 25vw;
    position: fixed;
    & + & {
      transform: translateX(25vw);
      position: fixed;
      top: 0;
      right: unset;
    }
  }
`;

const StyledImg = styled(Image)`
  object-position: top;
  object-fit: cover;
  display: block;
`;
type ProfilePicBoxProps = {
  imgSrc: string;
};

export default function ProfilePicBox({ imgSrc }: ProfilePicBoxProps) {
  return (
    <Wrapper>
      <StyledImg src={imgSrc} fill alt="Profile picture of Kristofer" />
    </Wrapper>
  );
}
