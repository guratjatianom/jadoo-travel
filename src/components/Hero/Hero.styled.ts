import styled, { keyframes } from "styled-components";

export const movePlane = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(100px, -100px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const PlaneAnimation = styled.div`
  animation: ${movePlane} 5s ease-in-out infinite;
`;
