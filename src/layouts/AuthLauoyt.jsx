import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLauoyt = () => {
    return (
        <div className=' bg-base-200'>
            <header className=' w-11/12 mx-auto py-3  '>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-3 min-h-screen '>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLauoyt;