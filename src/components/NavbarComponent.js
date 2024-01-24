import React, { useState } from 'react';
import logoImage from '../logo.jpg';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='p-2 m-2 shadow-md'>
            <div className='flex items-center justify-between md:hidden'>
                <div className='flex items-center  '>
                    <img
                        src={logoImage}
                        alt='Logo'
                        className='w-15 h-24 mr-2' // Adjust width, height, and margin as needed
                    />
                    <span className='font-bold cursor-pointer'><Link to="/">Gopabandhu Charitable Trust</Link></span>
                </div>
                {/* Hamburger menu button */}
                <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'
                        ></path>
                    </svg>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className='md:hidden flex flex-col mt-2'>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/' onClick={toggleMenu}>
                            Home
                        </Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/about' onClick={toggleMenu}>
                            About us
                        </Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400  m-1 p-1'>
                        <Link to='/work' onClick={toggleMenu}>
                            What We Do
                        </Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400  m-1 p-1'>
                        <Link to='/events' onClick={toggleMenu}>
                            Gallery
                        </Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/donate' onClick={toggleMenu}>
                            Donate Us
                        </Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/contact' onClick={toggleMenu}>
                            Contact Us
                        </Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/press' onClick={toggleMenu}>
                            In Press
                        </Link>
                    </h1>
                </div>
            )}
            {/* Desktop menu */}

            <div className='hidden md:flex m-2 p-2 gap-9 font-bold text-gray-700'>
                <div className='flex w-[30%]'>
                    <img
                        src={logoImage}
                        alt='Logo'
                        className='w-15 h-24 mr-2' // Adjust width, height, and margin as needed
                    />
                    <span className='font-bold cursor-pointer m-5 p-5 text-xl'><Link to="/">Gopabandhu Charitable Trust</Link></span>

                </div>
                <div className='flex justify-end w-[80%] m-5 p-5 text-xl'><h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                    <Link to='/'>Home</Link>
                </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/about'>About us</Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400  m-1 p-1'>
                        <Link to='/work'>What We Do</Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400  m-1 p-1'>
                        <Link to='/events'>Gallery</Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/donate'>Donate Us</Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/contact'>Contact Us</Link>
                    </h1>
                    <h1 className='cursor-pointer hover:text-red-400 m-1 p-1'>
                        <Link to='/press'>In Press</Link>
                    </h1></div>




            </div>
        </div>
    );
};

export default NavbarComponent;
