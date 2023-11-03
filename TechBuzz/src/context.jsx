import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"Tech Buzz"}>{children}</AppContext.Provider>;
};

// custom hook
const useGlobalContext = () => {
  return React.useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext} ;
