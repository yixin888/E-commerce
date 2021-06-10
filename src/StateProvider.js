import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer，这一整页不大需要清楚具体是什么，只是关于收集data
export const StateContext = createContext();

// Wrap our app and provide the Data layer,不需要知道，只是copy
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);