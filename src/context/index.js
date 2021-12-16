import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({}); //Vai guardar os dados para mandar pro 'irmão', se fosse pai e filho era so enviar por props
  const [repos, setRepos] = useState({});

  return (
    <context.Provider
      value={{
        userData,
        repos,
        setUserData,
        setRepos,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
