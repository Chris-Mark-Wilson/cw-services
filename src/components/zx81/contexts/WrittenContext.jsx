import { createContext,useState} from "react";




export const WrittenContext = createContext();

export const WrittenProvider = ({children}) => {
    const [written, setWritten] = useState(false)
    const [linkTriggerArray,setLinkTriggerArray]=useState([]);
    return (
        <WrittenContext.Provider value={{
            written, setWritten,
            linkTriggerArray, setLinkTriggerArray
            }}>
        {children}
        </WrittenContext.Provider>
    )
}