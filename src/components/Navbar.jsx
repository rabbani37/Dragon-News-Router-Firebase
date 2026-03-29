import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../ContextAPI/CreateContext";
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(console.log("LOGOUT Successfully"))
      .catch((error) => console.error(error))
  }

  return (
    <div className="flex justify-between items-center ">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="rounded-full w-12 h-12" src={user ? user.photoURL : userIcon} alt="user photo" />
        {
          user ? <Link onClick={handleLogOut} className="btn btn-primary px-10 ">Log Out</Link>
            :
            <Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
