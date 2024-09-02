import React, { createContext, useState } from 'react';

export const CountContext = createContext(null);

export const CountProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    return (
        <CountContext.Provider value={{
            counter,
            setCounter,
        }}>
            {children}
        </CountContext.Provider>
    );
}