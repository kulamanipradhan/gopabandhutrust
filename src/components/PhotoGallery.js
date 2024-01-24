import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoGallery = ({ images }) => {
    const containerStyle = {
        width: '80%', // Set the width of the container as needed
        margin: 'auto', // Center the container
    };

    const imageStyle = {
        width: '100%', // Set the width of each image to 100%
        height: 'auto', // Automatically adjust the height based on the aspect ratio
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div style={containerStyle}>
            <Slider {...sliderSettings} className="photo-gallery">
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Photo ${index + 1}`} style={imageStyle} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PhotoGallery;
