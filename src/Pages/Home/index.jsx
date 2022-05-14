import * as S from "./style";
import { useState } from "react";
import Logo from "../../img/boralalogo.png";
import Menu from "../../img/menu3barras.png";
import LogoNav from "../../assets/boralanav.png";
import LocationLogo from "../../assets/locationVector.svg";
import ImgCard1 from "../../assets/DJHenriqueDeFerrazTeste.svg"

const Home = () => {
  const menu = useState(false);

  return (
    <div>
      <S.Header>
        <figure>
          <img src={Logo} alt="Logo"></img>
        </figure>
        <figure>
          <img className="Menu" src={Menu} alt="Menu"></img>
        </figure>
      </S.Header>
      <S.NavImgDiv>
        <div>
          O MELHOR HAPPY HOUR DO BRASIL, AQUI NO
          <img src={LogoNav} alt="logoNav"></img>
        </div>
      </S.NavImgDiv>
      <S.LocationDiv>
        <img src={LocationLogo} alt="location"></img>
        <h2>aaa</h2>
      </S.LocationDiv>
      <S.CardBox>
        <img src={ImgCard1} alt="Dj Henrique de Ferraz"></img>
        <S.cardDescription>
          <h3>Revoada da Oficina - DJ Henrique de Ferraz</h3>
          <div>
            <h4>São Paulo - SP</h4>
            <h5>21 MAI</h5>
          </div>
        </S.cardDescription>
      </S.CardBox>
    </div>
  );
};

export default Home;
