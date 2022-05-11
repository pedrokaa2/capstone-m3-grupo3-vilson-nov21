import { createContext } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  return <EventContext.Provider>{children}</EventContext.Provider>;
};
