import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

let API = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload:{
          hit: data.hits,
          nbPages: data.nbPages,
        },
      })
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
