import styled from "styled-components";
import EventImg from "../../assets/boralaquadroedicao.png";

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  @media (min-width: 764px) {
    padding: 0 40px;
  }
`;

export const UL = styled.ul `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const Li = styled.li `
  list-style: none;
`;

export const Logo = styled.img `
  width: 150px;
  height: 40px;
  @media (min-width: 764px) {
    width: 180px;
    height: 50px;
  }
`;

export const SpanMeusEventos = styled.span `
  color: var(--orange);
  font-weight: bold;
  font-size: 14px;

  @media (min-width: 764px) {
    font-size: 24px;
  }
`;

export const ImgEvent = styled.div `
  width: 100%;
  height: 200px;
  background-image: url(${EventImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  max-height: 500px;
  @media (min-width: 764px) {
    height: 500px;
  }
`;

export const CardBox = styled.div `
  display: flex;
  height: auto;
  overflow-x: scroll;
  margin-left: 30px;

  img {
    width: 150px;
  }

  @media (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-height: 844px) {
    align-items: center;
    margin-left: 0;

    img {
      width: 160px;
    }
  }
`;

export const CardBoxDiv = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 2%;
  flex-direction: column;
  height: 280px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CardDescription = styled.div `
  h3 {
    color: var(--darkblue);
    font-size: 12px;
    width: 75px;
    margin: 5px 10px;
  }
  div {
    display: flex;
    margin: 15px 10px;
    flex-direction: column;

    margin: 5px;
  }
  h4 {
    color: var(--orange);
    margin-right: 3px;
    font-size: 12px;
    margin-left: 11px;
  }
  h5 {
    color: var(--blue);
    font-size: 12px;
    margin-top: 20px;
    margin-left: 10px;
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 18px;
      width: 200px;
    }
  }

  @media (min-height: 844px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-top: 5px;
    }

    h3,
    div {
      flex-direction: column;
      width: 160px;
    }

    h3,
    h4,
    h5 {
      font-size: 14px;
    }
  }
`;

export const DivContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;