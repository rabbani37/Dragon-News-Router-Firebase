import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { AuthContext } from '../ContextAPI/CreateContext';





const Register = () => {

    const { setUser, createUser } = useContext(AuthContext)


    const { handleSubmit, register, } = useForm();

    const handleRegister = (data) => {
        const email = data.email
        const password = data.password;
        if(!data.tarms){
            return alert("please accept the terms and condition")
        }
        // create user 
        createUser(email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(errors => {
                // const errorCode = errors.code;
                const errorMessage = errors.message;
                console.log(errorMessage)
            })
    }


    return (
        <div className='flex justify-center  items-center '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded p-10">
                <div>
                    <h2 className='text-3xl text-center font-bold'>Register an account</h2>
                </div>
                <hr className='my-8 text-gray-300' />
                <div className="card-body p-3">
                    <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
                        <label className="label">Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text" className="input w-full bg-gray-100" placeholder="name" />

                        <label className="label">Photo </label>
                        <input
                            {...register("photo", { required: true })}
                            type="text" className="input w-full bg-gray-100" placeholder="Photo url" />


                        <label className="label">Email</label>
                        <input
                            {...register("email", { required: true })}
                            type="email" className="input w-full bg-gray-100" placeholder="enter your emai address" />

                        <label className="label">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type="password" className="input w-full bg-gray-100" placeholder="enter your password" />


                        <div className='mt-4 flex gap-2 '>
                            <input
                                {...register("tarms", {})}
                                type="checkbox" />
                            <a className="">Accept Term & Conditions</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                </div>
                <div >
                    <p className='text-center text-sm font-semibold'>Already Have An Account ? <Link
                        to={`/auth/login`} className='text-red-400 hover:underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;