import { useContext } from "react";
import { AuthContext } from "../ContextAPI/CreateContext";
import { Navigate, useLocation, } from "react-router";
import Loading from "../components/Loading";

const PriverRoute = ({ children }) => {

    const { user, loading, } = useContext(AuthContext);
    const location = useLocation();




    if (loading) {
        return <Loading></Loading>
    }
    
    // console.log(location)
    if (!user) {
        return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
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