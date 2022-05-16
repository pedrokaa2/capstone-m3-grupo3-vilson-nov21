import styled, { keyframes } from "styled-components";
import LoginImage from "../../assets/login.svg";

export const Container = styled.div `
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div `
  @media (min-width: 768px) {
    flex: 1;
    background: url(${LoginImage}) no-repeat center var(--lightblue);
    background-size: contain;
  }
  @media (min-width: 1300px) {
    background-size: auto auto;
  }
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 768px;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const appearFromRight = keyframes `
from {
    opacity: 0;
    transform: translateX(50px);
}
to {
    opacity: 1;
    transform: translateX(0px);
}
`;
export const AnimationContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    min-width: 340px;
    max-width: 440px;
    text-align: center;
    h1 {
      margin-bottom: 32px;
    }
    p {
      margin-top: 8px;
      color: var(--darkblue);
      font-weight: bold;
      padding: 25px;
    }
    a {
      font-weight: bold;
      color: var(--blue);
    }
    img {
      width: 17%;
    }
  }
`;

export const Inputs = styled.input `
  background: transparent;
  align-items: center;
  flex: 1;
  height: 100%;
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--darkblue);
  padding: 1rem;
  height: 52px;
  width: 80%;
  transition: 0.4s;
  margin-bottom: 25px;
`;

export const Error = styled.span `
  color: var(--orange);

  font-size: 15px;
`;

export const ButtonLogin = styled.div `
  min-width: 340px;
  max-width: 440px;
`;