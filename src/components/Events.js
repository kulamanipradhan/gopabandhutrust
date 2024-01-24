import React from 'react'
import PhotoGallery from './PhotoGallery';
import { images } from '../utils/constant';



const Events = () => {

    return (
        <>  <div className='m-2 p-2' >
            <h1 className='text-center m-2 p-2 font-bold text-4xl'> Gallery</h1>

            <PhotoGallery images={images} />
        </div>
        </>

    )
}

export default Events