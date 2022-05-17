import * as S from "./style";
import api from "../../service/api";
import Logo from "../../img/boralalogo.png";
import LogoNav from "../../assets/boralanav.png";
import LocationLogo from "../../assets/locationVector.svg";
import ImgCard1 from "../../assets/DJHenriqueDeFerrazTeste.svg";
import { MenuDesktop } from "../../components/MenuDesktop";
import { MenuMobile } from "../../components/MenuMobile";
import { useState } from "react";
import { useEffect } from "react";
import CardEvent from "../../components/CardEvent";

const Home = () => {
  
  const [currentState, setCurrentState] = useState("")
  const [currentInput, setCurrentInput] = useState("")

  const [events, setEvents] = useState([])

  useEffect(() => {
    if(currentInput === ""){
      api.get(`/events/`).then(response => {
        if(currentState === ""){
          setEvents(response.data)
          console.log(response.data)
        }else{
          const filteredEvents = response.data.filter((event) => (
            event.state === currentState
          ))
          setEvents(filteredEvents)
        }
      })
    }else{
      const filteredEvents = events.filter((event) => (
        event.city.includes(currentInput) || event.name.includes(currentInput)
      )) 
      console.log(filteredEvents)
      setEvents(filteredEvents)
    }
  }, [currentState, currentInput])

  return (
    <div>
      <S.Header>
        <figure>
          <img src={Logo} alt="Logo"></img>
        </figure>
        <MenuDesktop 
        setCurrentState={setCurrentState}
        setCurrentInput={setCurrentInput} />
        <MenuMobile setCurrentState={setCurrentState} />
      </S.Header>
      <S.DivMain>
        <main>
          <S.NavImgDiv>
            <div>
              O MELHOR HAPPY HOUR DO BRASIL, AQUI NO
              <img src={LogoNav} alt="logoNav"></img>
            </div>
          </S.NavImgDiv>
          <S.LocationDiv>
            <img src={LocationLogo} alt="location"></img>
            <h2>
              {currentState !== "" ? currentState : "Selecione seu Estado"}
            </h2>
          </S.LocationDiv>
          <S.CardBox>
            {events.map((event) => (
              <S.CardBoxDiv
              key={event.id}
              >
                <img src={event.imgUrl} alt={event.name} />
                <S.cardDescription>
                  <CardEvent
                  date={event.date.split('-').reverse().join('/')}
                  address={event.address}
                  name={event.name}
                  city={event.city}
                  state={event.state}
                  />
                </S.cardDescription>
              </S.CardBoxDiv>
            ))}
          </S.CardBox>
        </main>
        <S.copyrightSpan>Copyright &#169; 2022 boralá</S.copyrightSpan>
      </S.DivMain>
    </div>
  );
};

export default Home;
