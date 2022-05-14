import styled from "styled-components";
import navImage from "../../assets/NavHomeImg.svg"

export const Header = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;

  img {
    width: 120px;
  }

  .Menu {
    width: 50px;
  }
`

export const NavImgDiv = styled.div `
  width: 100%;
  min-height: 200px;
  background-image: url(${navImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    color: var(--white);
    font-weight: 600;
    width: 74%;
    margin-left: 5%;
  }

  img {
    width: 25%;
    margin-left: 2px;
  }

  @media (min-width: 768px) {
    height: 300px;

    div {
      width: 42%;
      font-size: 23px;
    }
  }
  @media (min-width: 1024px) {
    height: 400px;

    div {
      width: 50%;
      font-size: 43px;
    }
  }
  @media (min-width: 1440px) {
    height: 420px;

    div {
      width: 33%;
      font-size: 53px;
    }
  }
`

export const LocationDiv = styled.div `
  display: flex;
  align-items: center;
  margin: 10% 10%;


  h2 {
    margin-left: 2%;
  }
`

export const CardBox = styled.div `
  display: flex;
  justify-content: center;

  img {
    width: 150px;
  }
`

export const cardDescription = styled.div `
  h3 {
    color: var(--darkblue);
    font-size: 12px;
    width: 75px;
    margin: 5px 10px;
  }
  div {
    display: flex;
    align-items: center;
    margin: 5px 10px;
    flex-direction: column;
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

  @media (min-width: 1200px) {
    h3 {
      font-size: 18px;
      width: 200px;
    }
  }
`