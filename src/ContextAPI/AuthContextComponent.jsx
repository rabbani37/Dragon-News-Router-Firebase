import { useEffect, useState } from "react";
import { AuthContext } from "./CreateContext";
import app from "../Firebase/firebase.confog";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



const auth = getAuth(app)

const AuthContextComponent = ({ children }) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    // console.log(user)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
        }));
        return () => { unSubscribe() }
    }, [])

    const authINFO = {
        user,
        setUser,
        createUser,
        logInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authINFO}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextComponent;