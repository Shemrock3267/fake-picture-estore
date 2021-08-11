import React from 'react'

const Context = React.createContext();

function StoreContextProvider({ children }) {
  return (
    <Context.Provider value=''>
      {children}
    </Context.Provider>
  )
}

export { StoreContextProvider, Context}