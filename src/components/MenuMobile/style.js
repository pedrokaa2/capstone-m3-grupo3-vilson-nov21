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
  height: calc(100vh - 120px - 40px);
  left: 0;
  top: 120px;
  bottom: 40px;
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

export const DivInput = styled.div `
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px;

  input {
    background: none;
    border: none;
    color: var(--white);
    flex: 1;
    
    ::placeholder {
      color: var(--white);
      opacity: 45%;
    }
  }
`

export const DivButton = styled.div `
  button {
    background: none;
    color: var(--white);
    border: 1px solid var(--white);
    padding: 20px;
    border-radius: 20px;
  }
`