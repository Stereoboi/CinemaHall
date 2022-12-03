import React, { createContext, useState } from "react";

// create context
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [userUid, setUserUid] = useState('');

  // fetch a user from a fake backend API
  

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={{userUid, setUserUid}}>
      {children}
    </UserContext.Provider>
  );
};

