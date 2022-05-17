import { useState } from "react";

import { useEffect } from "react";
import { useEvent } from "../../Providers/event";

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
      <h1>MEUS EVENTOS!!!</h1>

      {/* trazer os cards da home e listar aqui*/}

      <ul>
        {myEvents.map((listEvents, id) => {
          return (
            <>
              <li key={id}> Nome: {listEvents.name}</li>
              <li key={id}> Data: {listEvents.date}</li>
              <li key={id}> Cidade: {listEvents.city}</li>
              <li key={id}> Estado: {listEvents.state}</li>
              <li key={id}> Url: {listEvents.imgUrl}</li>
              <li key={id}> Pagina do evento: {listEvents.eventPage}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MyEvents;
