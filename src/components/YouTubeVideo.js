import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoIds }) => {
    const opts = {
        height: '195', // Adjust the height for a better mobile experience
        width: '100%', // Make the video container take the full width
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div className='md:flex justify-center space-x-8 mt-4 m-2 p-2'>
            {videoIds.map((videoId, index) => (
                <div key={index} className="video-container mb-4">
                    <YouTube videoId={videoId} opts={opts} />
                </div>
            ))}
        </div>
    );
};

export default YouTubeVideo;
