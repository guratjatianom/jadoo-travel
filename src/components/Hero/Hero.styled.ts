import styled, { keyframes } from "styled-components";

export const movePlane = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100px, -100px); 
  }
`;

export const PlaneAnimation = styled.div`
  animation: ${movePlane} 3s ease-in-out forwards;
  animation-fill-mode: forwards;
`;

export const slideUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const TravellerAnimation = styled.div`
  animation: ${slideUp} 2s ease-in-out forwards;
`;
