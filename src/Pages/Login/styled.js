import styled, { keyframes } from "styled-components";

export const Container = styled.div `
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div `
  @media (min-width: 900px) {
    flex: 1;
    background: url(${"./login.png"}) no-repeat center, var(--lightblue);
    background-size: contain;
  }
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
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
    width: 340px;
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
  }
`;

export const Inputs = styled.input `
  background: transparent;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--darkblue);
  padding: 1rem;
  height: 52px;
  width: 80%;
  transition: 0.4s;
  margin-bottom: 25px;

  @media (min-width: 900px) {
    width: 338px;
    margin-bottom: 20px;
  }
`;

export const Error = styled.span `
  color: var(--orange);

  font-size: 15px;
`;