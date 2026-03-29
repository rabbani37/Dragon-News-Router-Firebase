import { useEffect, useState } from "react";
import { AuthContext } from "./CreateContext";
import app from "../Firebase/firebase.confog";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";




const auth = getAuth(app)


const AuthContextComponent = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // social login provider 
    const providerGoogle = new GoogleAuthProvider()
    const providerGitHub = new GithubAuthProvider()
    const providerTwitter = new TwitterAuthProvider()
    const providerFacebook = new FacebookAuthProvider()

    // Sign In phone
    const appVerifier = window.recaptchaVerifier



    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const forgatePassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const googleLogin = () => {
        return signInWithPopup(auth, providerGoogle)
    }
    const gitHubLogin = () => {
        return signInWithPopup(auth, providerGitHub)
    }
    const twitterLogin = () => {
        return signInWithPopup(auth, providerTwitter)
    }
    const facebookLogin=()=>{
        return signInWithPopup(auth,providerFacebook)
    }
    const phoneNumberLogin = (phoneNumber) => {
        return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    }
    



    // console.log(user)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoading(false)

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
        updateUser,
        forgatePassword,
        googleLogin,
        gitHubLogin,
        phoneNumberLogin,
        twitterLogin,
        facebookLogin
    }

    return (
        <AuthContext.Provider value={authINFO}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextComponent;