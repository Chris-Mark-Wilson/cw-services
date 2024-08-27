import {useState} from "react";

import { createContext } from "react";

export const UserContext = createContext(null);


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}
