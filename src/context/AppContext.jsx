import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [visits, setVisits] = useState(0);

  return (
    <AppContext.Provider value={{ visits, setVisits }}>
      {children}
    </AppContext.Provider>
  );
};