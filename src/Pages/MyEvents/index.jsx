import { useContext, useState } from "react";
import { EventContext } from "../../Providers/event";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useEvent } from "../../Providers/event";

const MyEvents = () => {
  const { eventList } = useEvent();
  const [data, setData] = useState([]);
  useEffect(() => {
    eventList().then((listaEventos) => {
      setData(listaEventos);
    });
  }, []);

  return (
    <div>
      <h1>MEUS EVENTOS</h1>

      <ul>
        {data.map((lista, id) => {
          return (
            <>
              <li key={id}> Nome: {lista.name}</li>
              <li key={id}> Data: {lista.date}</li>
              <li key={id}> Cidade: {lista.city}</li>
              <li key={id}> Estado: {lista.state}</li>
              <li key={id}> Url: {lista.imgUrl}</li>
              <li key={id}> Pagina do evento: {lista.eventPage}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MyEvents;
