import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`

export const Header = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  img {
    width: 150px;
    margin-left: 30px;
  }

  h2 {
    color: var(--blue);
    margin-right: 30px;
  }
`

export const divImg = styled.div `
  margin-bottom: 30px;
`

export const cardOne = styled.div `
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 15%;

  img {
    border-radius: 100%;
    width: 60%
  }
`

export const cardOneFirstSon = styled.div `
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  img {
    width: 60%;
    height: 40%;
  }
`

export const cardOneSecondSon = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`

export const cardDescription = styled.div `
  h3 {
    color: var(--darkblue);
    font-size: 12px;
    width: 135px;
  }
  div {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  h4 {
    color: var(--orange);
    margin-right: 3px;
    font-size: 12px;
  }
  h5 {
    color: var(--blue);
    font-size: 12px;
  }
`

export const cardOneThirdSon = styled.div `
  display: flex;
  
  a {
    margin-right: 3px;
  }
`