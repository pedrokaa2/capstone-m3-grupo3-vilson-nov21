import styled from "styled-components";

export const DisplayMenuMob = styled.div `
  display: flex;

  @media (min-width: 768px){
    display: none;
  }
`

export const HandleMenu = styled.div `
  display: ${(props) => props.isOpen ? "block" : "none"};
`