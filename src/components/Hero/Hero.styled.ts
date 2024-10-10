import styled, { keyframes } from "styled-components";

// Animation for the plane movement
export const movePlane = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100px, -100px); 
  }
`;

// Styled component to apply the plane animation
export const PlaneAnimation = styled.div`
  animation: ${movePlane} 3s ease-in-out forwards;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    animation: ${movePlane} 2s ease-in-out forwards;
    transform: translate(50px, -50px);
  }
`;

// Animation for the traveller sliding up
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

// Styled component to apply the traveller slide up animation
export const TravellerAnimation = styled.div`
  animation: ${slideUp} 2s ease-in-out forwards;

  @media (max-width: 768px) {
    animation: ${slideUp} 1.5s ease-in-out forwards;
    transform: translateY(50px);
  }
`;
