import styled from "styled-components";

export const InputContainer = styled.div `
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--darkblue);
  padding: 1rem;
  height: 52px;
  width: 80%;
  transition: 0.4s;
  margin: 0 auto;
  /* margin-left: 50px; */
 

  ${(props) =>
    props.isWrong &&
    `
   border-color: var(--orange);
  `}
  @media (min-width: 1024px) {
    width: 338px;
    margin-bottom: 20px;
  }
`;

export const Inputs = styled.input `
  background: transparent;
  align-items: center;
  flex: 1;
  border: 0;
  width: 100%;
  height: 100%;
`;

export const ErrorDiv = styled.div`
  margin-top: 10px;
  color: var(--orange)
`;

