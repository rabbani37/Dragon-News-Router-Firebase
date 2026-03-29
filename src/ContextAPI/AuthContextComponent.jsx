import { useEffect, useState } from "react";
import { AuthContext } from "./CreateContext";
import app from "../Firebase/firebase.confog";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import Loading from "../components/Loading";



const auth = getAuth(app)

const AuthContextComponent = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        setLoading2(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        setLoading2(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const logOut = () => {
        return signOut(auth)
    }



    // console.log(user)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoading(false)
            setLoading2(false)
        }));
        return () => { unSubscribe() }
    }, [])

    const authINFO = {
        user,
        setUser,
        createUser,
        logInUser,
        logOut,
        loading,
        setLoading,
        loading2,
        setLoading2,
        updateUser
    }

    return (
        <AuthContext.Provider value={authINFO}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextComponent;