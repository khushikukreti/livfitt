import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import imgg from '../public/APPAREL.jpg'
function Img() {
    return (
        <div>
            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: "/APPAREL.jpg"
    },
    largeImage: {
        src: "/APPAREL.jpg",
        width: 1200,
        height: 1800
    }
}} />
        </div>
    )
}

export default Img
