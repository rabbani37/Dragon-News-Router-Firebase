import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../ContextAPI/CreateContext';

const Login = () => {

    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded p-10">
                <div>
                    <h2 className='text-3xl text-center font-bold'>Login your account</h2>
                </div>
                <hr className='my-10 text-gray-300' />
                <div className="card-body p-3">
                    <form className="fieldset">

                        <label className=" label">Email</label>
                        <input type="email" className="input w-full bg-gray-100" placeholder="enter your emai address" />

                        <label className=" label">Password</label>
                        <input type="password" className="input w-full bg-gray-100" placeholder="enter your password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
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