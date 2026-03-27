import { useContext } from "react";
import { AuthContext } from "../ContextAPI/CreateContext";
import { Navigate } from "react-router";
import Loading from "../components/Loading";

const PriverRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>

    }

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