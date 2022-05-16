import styled from "styled-components";

export const DisplayMenuMob = styled.div `
  display: flex;

  @media (min-width: 768px){
    display: none;
  }
`

export const HandleMenu = styled.div `
  display: ${(props) => props.isOpen ? "flex" : "none"};
  background-color: var(--darkblue);
  flex-direction: column;
  padding: 8px;
  width: 100%;
  height: calc(100vh - 120px - 50px);
  left: 0;
  top: 120px;
  bottom: 50px;
  position: absolute;
  z-index: 1;

  a {
    color: var(--white);
    margin: 5px;
    font-size: 14px;
  }

  select {
    background: none;
    border: none;
    color: var(--white);
    margin-top: 5px;
    margin-left: 2px;
    font-size: 13px;
  }
    
`