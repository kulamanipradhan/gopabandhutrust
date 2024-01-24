import React from 'react'
import { Link } from 'react-router-dom'

const ButtonOnslider = () => {
    return (
        <div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <div className='flex space-x-10 0 text-center'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'><Link to="/about">About Us</Link></button>
                    <button className='bg-green-500 text-white px-4 py-2 rounded'><Link to="/contact">contact Us</Link></button>
                </div>
            </div></div>
    )
}

export default ButtonOnslider