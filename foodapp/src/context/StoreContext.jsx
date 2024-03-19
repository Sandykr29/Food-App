import React from 'react';
import { createContext } from 'react';

export const StoreContext=createContext(null)

export const StoreContextProvider = (props) => {

const contextValue={
    
}

  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}
