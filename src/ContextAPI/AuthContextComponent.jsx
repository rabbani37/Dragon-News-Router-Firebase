import { useState } from "react";
import { AuthContext } from "./CreateContext";





const AuthContextComponent = ({children}) => {
    const [user, setUser] = useState(null)




    const authINFO = {
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authINFO}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextComponent;