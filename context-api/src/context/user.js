import { useContext } from "react";
import { createContext } from "react";

const userContext = createContext({
    user: '',
    setUser: () => {}
})

export const UserContextProvider = userContext.Provider

const useUserContext = () => {
    return useContext(userContext)
}

export default useUserContext;