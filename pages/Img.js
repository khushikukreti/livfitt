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
        imageClassName:"imge",
        src: "/APPAREL.jpg",
        width:100,
        height:100
    },
    largeImage: {
        src: "/APPAREL.jpg",
        width: 500,
        height: 500
    }
}} />
        </div>
    )
}

export default Img
