import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const FooterCompo = () => {
    return (<footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">

            <div className='flex justify-between m-4 p-4'>
                <div className='font-bold '>
                    <h1 className='text-green-400 text-3xl'>Where to find us</h1>
                    <p>Chadhiapali Square</p>
                    <p>Jagannath Prasad, Odisha, India</p>
                    <p>pincode - 761121</p>
                </div>
                <div className='font-bold '>
                    <h1 className='text-green-400 text-3xl'>Contact Details</h1>
                    <p>ph - 9348641327</p>
                    <p>Gmail-gopabandhucharitabletrust2021@gmail.com</p>

                </div>
                <div className="font-bold">
                    <h1 className="text-green-400 text-3xl mb-2">Follow us</h1>
                    <div className='flex'>
                        <a
                            href="https://www.facebook.com/profile.php?id=100071287937586"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white mr-4 hover:text-gray-500"
                        >
                            <FaFacebookSquare className='text-3xl' />
                        </a>

                        <a
                            href="https://www.youtube.com/@gopabandhucharitabletrust5363"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-500"
                        >
                            <FaYoutube className='text-3xl' />
                        </a>
                    </div>
                </div>
            </div>

            <p>&copy; 2023 Gopabandhu Charitable Trust</p>
            <p>Developed by Kulamani Pradhan with </p>
        </div>
    </footer>

    )
}

export default FooterCompo