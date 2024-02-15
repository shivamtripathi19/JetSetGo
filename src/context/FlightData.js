import React, { useState, createContext } from "react";

export const CreateContext = createContext();

export const CreateContextProvider = (props) => {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  const [airlines, setAirlines] = useState([]);

  const handleAirlinesResultItems = (data) => {
    setAirlines(data);
  };

  const handleSourceItems = (data) => {
    setSource(data);
  };
  const handleDestinationItems = (data) => {
    setDestination(data);
  };

  return (
    <CreateContext.Provider
      value={{
        source,
        destination,
        airlines,
        handleSourceItems,
        handleDestinationItems,
        handleAirlinesResultItems,
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
};
