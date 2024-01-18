import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonOnslider from './ButtonOnslider';

const HeroComponent = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...sliderSettings} >
            <div className='relative w-full md:w-80 mx-auto h-[800px]'>
                <img src="/images/slider2.jpg" className='w-full h-full object-cover' alt="Slide 2" />
                <ButtonOnslider />
            </div>
            <div className='w-full md:w-80 mx-auto h-[800px]'>
                <img src="/images/slider1.jpg" className='w-full h-full object-cover' alt="Slide 1" />
                <ButtonOnslider />
            </div>
            <div className='w-full md:w-80 mx-auto h-[800px]'>
                <img src="/images/slider3.jpg" className='w-full h-full object-cover' alt="Slide 3" />
                <ButtonOnslider />
            </div>
            {/* Add more slides as needed */}
        </Slider>
    );
};

export default HeroComponent;
