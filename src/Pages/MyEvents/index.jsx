import { useState } from "react";
import * as S from "./style";

import { useEffect } from "react";
import { useEvent } from "../../Providers/event";
import {
  Header,
  Logo,
  SpanMeusEventos,
  ImgEvent,
  CardBox,
  CardBoxDiv,
  CardDescription,
  Li,
  UL,
  DivContainer,
} from "./style";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/boralalogo.png";

const MyEvents = () => {
  const { eventList } = useEvent();
  const [myEvents, setmyEvents] = useState([]);
  useEffect(() => {
    eventList().then((listaEventos) => {
      setmyEvents(listaEventos);
    });
  }, []);

  return (
    <div>
      <S.Header>
        <Link to="/">
          <Logo src={LogoImg} alt="logo borala" />
        </Link>
        <SpanMeusEventos> Meus Eventos</SpanMeusEventos>
      </S.Header>
      <ImgEvent />

      <S.CardBox>
        <UL>
          {myEvents.map((listEvents, id) => {
            return (
              <>
                <DivContainer>
                  <S.CardBoxDiv>
                    <S.Li key={id}>
                      <img src={listEvents.imgUrl} alt="img-event" />
                    </S.Li>
                  </S.CardBoxDiv>
                  <S.CardDescription>
                    <S.Li key={id}>
                      <h3> {listEvents.name}</h3>
                    </S.Li>
                    <S.Li key={id}>
                      <h4>
                        {listEvents.city} - {listEvents.state}
                      </h4>
                    </S.Li>
                    <S.Li key={id}>
                      <h5>{listEvents.date}</h5>
                    </S.Li>
                  </S.CardDescription>
                </DivContainer>
              </>
            );
          })}
        </UL>
      </S.CardBox>
    </div>
  );
};

export default MyEvents;

///
