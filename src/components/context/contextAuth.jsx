import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducerAuth";

export const AuthContext = createContext();

export const AuthController = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(localStorage);

  return (
    <>
      <AuthContext.Provider value={[state, dispatch]}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
