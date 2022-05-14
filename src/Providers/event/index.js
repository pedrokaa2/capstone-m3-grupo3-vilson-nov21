import { createContext } from "react";
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

  return (
    <EventContext.Provider value={{ eventRegister }}>
      {children}
    </EventContext.Provider>
  );
};
