import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../ContextAPI/CreateContext";

const SocialLogin = () => {

  const { googleLogin, gitHubLogin, twitterLogin, facebookLogin } = useContext(AuthContext);



  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user)
        alert("Google User login")
      })
      .catch(errors => {
        console.log(errors)
      })

  }
  const handleGitHubLogin = () => {
    gitHubLogin()
      .then(result => {
        console.log(result.user)
        alert("GitHub User login")
      })
      .catch(errors => {
        console.log(errors)
      })
  }
  const handleTwitterLogin = () => {
    twitterLogin()
      .then(result => {
        console.log(result.user)
        alert("Twitter User login")
      })
      .catch(errors => {
        console.log(errors)
      })
  }

  const handleFacebookLogin = () => {
    facebookLogin()
      .then(result => {
        console.log(result.user)
        alert("FaceBook User login")
      })
      .catch(errors => {
        console.log(errors)
      })
  }
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleLogin} className="btn btn-secondary btn-outline w-full">
          <FaGoogle size={24} /> Login with Google
        </button>
        <button onClick={handleGitHubLogin} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
        <button onClick={handleTwitterLogin} className="btn btn-outline btn-info  w-full">
          <FaTwitter size={24} /> Login with Twitter
        </button>
        <button onClick={handleFacebookLogin} className="btn btn-outline text-blue-500  w-full">
          <FaFacebook size={24} /> Login with FaceBook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
