import styled from "styled-components";

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--darkblue);
  padding: 1rem;
  height: 52px;
  width: 90%;
  transition: 0.4s;
  margin-bottom: 25px;
  

  @media (min-width: 1024px) {
    width: 338px;
    margin-bottom: 40px;
  }
`;

export const Inputs = styled.input`
  background: transparent;
  align-items: center;
  flex: 1;
  border: 0;
  width: 100%;
  height: 100%;
`;
