import { useContext } from "react";
import { AuthContext } from "../ContextAPI/CreateContext";
import { Navigate } from "react-router";

const PriverRoute = ({ children }) => {

    const { user } = useContext(AuthContext);


    if (!user) {
        return <Navigate to={"/auth/login"}></Navigate>
    }
    else {
        return (
            <div>
                {children}
            </div>
        );
    }
};

export default PriverRoute;