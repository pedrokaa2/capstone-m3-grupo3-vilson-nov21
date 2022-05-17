import { createContext, useContext } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const eventRegister = (data, history) => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));
    data.userId = Number(jwt_decode(token).sub);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .post("/events/", data, config)
      .then((response) => {
        history.push("/home");
        toast.success("Evento cadastrado!");
      })
      .catch((err) => {
        console.log(err);
        console.log(data);
        console.log(config);
        console.log("TOKEN");
        console.log(token);
        toast.error("Algo errado ocorreu!");
      });
  };

  const eventList = async () => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));

    const userId = JSON.parse(localStorage.getItem("@borala:userId"));
    let dataReturn = [];
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await api
      .get(`/events?userId=${userId}`, config)
      .then((response) => {
        dataReturn = response.data;

        console.log("datareturn 1 >> ", dataReturn);
      })
      .catch((err) => {
        console.log(err);
        console.log(config);
        console.log("TOKEN");
        console.log(token);
        dataReturn = err.response.data;
      });

    console.log("dataReturn 2 >> ", dataReturn);

    return dataReturn;
  };

  const eventUpdate = (data, history) => {
    const token = JSON.parse(localStorage.getItem("@borala:token"));
    data.userId = Number(jwt_decode(token).sub);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .patch(`/events/${data.id}`, data, config)
      .then((response) => {
        history.push("/");
        toast.success("Evento atualizado!");
      })
      .catch((err) => {
        console.log(err);
        console.log(data);
        console.log(config);
        console.log("TOKEN");
        console.log(token);
        toast.error("Algo errado ocorreu!");
      });
  };

  return (
    <EventContext.Provider value={{ eventRegister, eventList, eventUpdate }}>
      {" "}
      {children}{" "}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
