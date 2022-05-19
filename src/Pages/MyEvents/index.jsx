import { useState } from "react";
import * as S from "./style";

import { useEffect } from "react";
import { useEvent } from "../../Providers/event";
import {
  Logo,
  SpanMeusEventos,
  ImgEvent,
  UL,
  DivContainer,
  EditButton,
} from "./style";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/boralalogo.png";

const MyEvents = () => {
  const { eventList, editEvent } = useEvent();
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
        <SpanMeusEventos>
          MEUS EVENTOS
        </SpanMeusEventos>
      </S.Header>
      <ImgEvent />

      <S.CardBox>
        <UL>
          {myEvents.map((listEvents) => {
            return (
              <DivContainer key={listEvents.id}>
                <S.CardBoxDiv>
                  <S.Li>
                    <img src={listEvents.imgUrl} alt="img-event" />
                  </S.Li>
                </S.CardBoxDiv>
                <S.CardDescription>
                  <EditButton onClick={() => editEvent(listEvents)}>
                    Editar
                  </EditButton>
                  <S.Li>
                    <h3> {listEvents.name}</h3>
                  </S.Li>
                  <S.Li>
                    <h4>
                      {listEvents.city} - {listEvents.state}
                    </h4>
                  </S.Li>
                  <S.Li>
                    <h5>{listEvents.date.split("-").reverse().join("/")}</h5>
                  </S.Li>
                </S.CardDescription>
              </DivContainer>
            );
          })}
        </UL>
      </S.CardBox>
    </div>
  );
};

export default MyEvents;

///
