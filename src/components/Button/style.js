import styled from "styled-components";

export const Container = styled.button`
  background: var(--darkblue);
  color: var(--white);
  border-radius: 15px;
  border: none;
  width: 250px;
  height: 50px;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  margin-top: 20px;

  @media (min-width: 1024px) {
    height: ${(props) => (props.height ? props.height : "60px")};
    width: ${(props) => (props.width ? props.width : "300px")};
  }
`;
