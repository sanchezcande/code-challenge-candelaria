import styled, { keyframes } from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
  gap: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    flex-direction: column;
  }
`;

export const LetterContainer = styled.div`
@media (max-width: 768px) {
  display: block;
}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Title = styled.h1`
font-size: 2rem;
  color: #CD853F;
  animation: ${fadeInFromLeft} 0.9s ease forwards;
`;

export const Letter = styled.h2`
  display: inline-block;
  font-size: 2rem;
  opacity: 0;
  color: #A0522D;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${props => props.animationdelay || '0s'};
`;
