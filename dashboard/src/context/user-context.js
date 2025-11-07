import { createContext, useContext } from "react";
import { InitialUser } from "../constants";

const UserContext = createContext(InitialUser);

export default UserContext;

export const useUser = () => {
    const context = useContext(UserContext);
    
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    
    return context// {user, setUser};
}
