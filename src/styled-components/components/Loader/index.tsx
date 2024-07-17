import styled, { keyframes } from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 8px solid rgba(44, 197, 207, 0.1);
  border-left-color: rgba(44, 197, 207, 0.8);
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
  <LoaderWrapper>
    <Spinner />
  </LoaderWrapper>
);

export default Loader;
