import * as S from "./style";
import Logo from "../../img/boralalogo.png";
import LogoNav from "../../assets/boralanav.png";
import LocationLogo from "../../assets/locationVector.svg";
import ImgCard1 from "../../assets/DJHenriqueDeFerrazTeste.svg"
import { MenuDesktop } from "../../components/MenuDesktop";
import { MenuMobile } from "../../components/MenuMobile";
import { useState } from "react";

const Home = () => {
  
  const [currentState, setCurrentState] = useState()

  return (
    <div>
      <S.Header>
        <figure>
          <img src={Logo} alt="Logo"></img>
        </figure>
        <MenuDesktop setCurrentState={setCurrentState} />
        <MenuMobile setCurrentState={setCurrentState} />
      </S.Header>
      <S.NavImgDiv>
        <div>
          O MELHOR HAPPY HOUR DO BRASIL, AQUI NO
          <img src={LogoNav} alt="logoNav"></img>
        </div>
      </S.NavImgDiv>
      <S.LocationDiv>
        <img src={LocationLogo} alt="location"></img>
        <h2>{currentState}</h2>
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
        <img src={ImgCard1} alt="Dj Henrique de Ferraz"></img>
        <S.cardDescription>
          <h3>Revoada da Oficina - DJ Henrique de Ferraz</h3>
          <div>
            <h4>São Paulo - SP</h4>
            <h5>21 MAI</h5>
          </div>
        </S.cardDescription>
        <img src={ImgCard1} alt="Dj Henrique de Ferraz"></img>
        <S.cardDescription>
          <h3>Revoada da Oficina - DJ Henrique de Ferraz</h3>
          <div>
            <h4>São Paulo - SP</h4>
            <h5>21 MAI</h5>
          </div>
        </S.cardDescription>
      </S.CardBox>
      <S.copyrightSpan>
        Copyright &#169; 2022 boralá
      </S.copyrightSpan>
    </div>
  );
};

export default Home;
