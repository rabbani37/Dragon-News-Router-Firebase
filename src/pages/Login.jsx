import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../ContextAPI/CreateContext';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { logInUser, forgatePassword } = useContext(AuthContext);
    const loaction = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();


    const { handleSubmit, register, getValues } = useForm()

    const handleLogin = (data) => {
        console.log(data)
        logInUser(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (loaction.state && user) {
                    navigate(loaction.state)
                }
                else {
                    navigate('/')
                }

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }



    const handleForgatePassword = () => {
        const email = getValues("email")
        if (!email) {
            alert("Please provide valid email.")
        }
        forgatePassword(email)
            .then(() => {
                alert('Password reset email sent!')
                // ..
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`${errorMessage}`)
                // ..
            });
    }

    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded p-10">
                <div>
                    <h2 className='text-3xl text-center font-bold'>Login your account</h2>
                </div>
                <hr className='my-10 text-gray-300' />
                <div className="card-body p-3">
                    <form onSubmit={handleSubmit(handleLogin)} className="fieldset">

                        <label className=" label">Email</label>
                        <input ref={emailRef}
                            {...register("email", { required: true })}
                            type="email" className="input w-full bg-gray-100" placeholder="enter your emai address" />

                        <label className=" label">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type="password" className="input w-full bg-gray-100" placeholder="enter your password" />

                        <div><button onClick={handleForgatePassword} type='button' className="link link-hover">Forgot password?</button></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
                <div >
                    <p className='text-center text-sm font-semibold'>Dont’t Have An Account ? <Link
                        to={`/auth/register`} className='text-red-400 hover:underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;