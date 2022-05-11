import styled from "styled-components";

export const Container = styled.button`
  background: var(--darkblue);
  color: var(--white);
  border-radius: 15px;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-family: "Nunito", sans-serif;
  font-weight: bold;
`;
