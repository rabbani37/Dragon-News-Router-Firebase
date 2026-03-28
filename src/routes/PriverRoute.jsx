import { useContext } from "react";
import { AuthContext } from "../ContextAPI/CreateContext";
import { Navigate, useLocation, } from "react-router";
import Loading from "../components/Loading";
import Loading2 from "../components/Loading2";

const PriverRoute = ({ children }) => {

    const { user, loading, loading2 } = useContext(AuthContext);
    const location = useLocation();




    if (loading) {
        return <Loading></Loading>
    }
    if (loading2) {
        // return <Loading2></Loading2>
    }

    console.log(location)
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