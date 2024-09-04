import React, { createContext, useState,useEffect } from 'react';

export const CountContext = createContext(null);

export const CountProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial state based on system color scheme or localStorage
  const [color, setColor] = useState(() => {
    const storedColor = localStorage.getItem('color');
    return storedColor || (prefersDarkMode ? '#ffffff' : '#000000'); // Default color based on system mode
  });

  const [backgroundColor, setBackgroundColor] = useState(() => {
    const storedBackgroundColor = localStorage.getItem('backgroundColor');
    return storedBackgroundColor || (prefersDarkMode ? '#000000' : '#ffffff'); // Default background color based on system mode
  });

  useEffect(() => {
    localStorage.setItem('color', color);
  }, [color]);

  useEffect(() => {
    localStorage.setItem('backgroundColor', backgroundColor);
  }, [backgroundColor]);
  
    return (
        <CountContext.Provider value={{
            counter,
            setCounter,
            color,
            setColor,
            backgroundColor,
            setBackgroundColor
        }}>
            {children}
        </CountContext.Provider>
    );
}