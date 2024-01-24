import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroComponent from './HeroComponent'
import FooterCompo from './FooterCompo'
import PhotoGallery from './PhotoGallery'
import { images } from '../utils/constant'
import WhatWeDo from './WhatWeDo'
import YouTubeVideo from './YouTubeVideo'
import DynamicPost from './DynamicPost'





const HomeCompo = () => {
    const videoIds = ['34RN9ixlEkw', 'c5oNRKPd3JE', 'iCY3iBg-kTk'];

    return (
        <div>
            <div >
                <HeroComponent />
                <WhatWeDo />
                <DynamicPost />
                <YouTubeVideo videoIds={videoIds} />




                <outlet />






            </div>
        </div>
    )
}

export default HomeCompo