import React, { useState, createContext } from "react";

export const CreateSearchContext = createContext();

export const CreateSearchContextProvider = (props) => {
  const [userSearch, setUserSearch] = useState({});

  const handleSearchItems = (data) => {
    setUserSearch(data);
  };

  return (
    <CreateSearchContext.Provider value={{ userSearch, handleSearchItems }}>
      {props.children}
    </CreateSearchContext.Provider>
  );
};
