import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MessageContext = createContext({
    msg:{
        createdOn:Date.now()
    },
    setCurrentMessage:(msg)=>{}
})

const MessageContextProvider = ({children}) => {
    const [currentMsg,setCurrentMsg] = useState({
        createdOn:Date.now()
    })
    const setCurrentMessage = (msg) => {
        console.log(msg,"setting new msg state val")
        if(msg && msg.id) setCurrentMsg(msg)
    }
    return (
        <MessageContext.Provider value={
            {
                msg:currentMsg,
                setCurrentMessage
            }
        } >
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContextProvider

export const useMessageState = () => {
    const state = useContext(MessageContext)
    if(!state) throw new Error("no message state fond");
    return state;
}