import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import Image from "next/image";

const Wrapper = styled.div`
  width: 25vw;
  height: 25vw;
  position: fixed;
  &::after {
    content: "";
    inset: 0px;
    background: ${(props) => props.theme.colors.primaryDefault};
    opacity: 0.35;
    position: absolute;
  }

  & + & {
    transform: translateX(25vw);
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
      <StyledImg src={imgSrc} fill />
    </Wrapper>
  );
}
