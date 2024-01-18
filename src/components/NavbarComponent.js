import React from 'react';
import logoImage from '../logo.jpg';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
    return (
        <div className='hidden md:flex p-2 m-2 shadow-md'>

            <div className='w-[30%] flex items-center'>
                <img
                    src={logoImage}
                    alt='Logo'
                    className='w-15 h-24 mr-2' // Adjust width, height, and margin as needed
                />
                <span className='font-bold cursor-pointer'>Gopabandhu Charitable Trust</span>
            </div>
            <div className='flex w-[70%] justify-center m-2 p-2 gap-9 font-bold text-gray-700'>
                <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>Home</h1>
                <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'> about us</h1>
                <h1 className='cursor-pointer hover:text-red-400  m-1 p-1'>What We Do</h1>
                <h1 className='cursor-pointer hover:text-red-400  m-1 p-1'>Events</h1>
                <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>Donate Us</h1>
                <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>Contact Us</h1>
            </div>
        </div>
    );
};

export default NavbarComponent;
