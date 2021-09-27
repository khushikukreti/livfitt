import React from 'react'
import Image from 'next/image'
function BannerSlide({imgURL}) {
    return (
        
       
        <div className="item">
            <div className=" daily-essential1aa bannerSlide">
              <a>
                <div className="">
                  <Image
                    src={`${imgURL}`}
                    layout="fill"
                  />
                </div>
              </a>
            </div>
          </div> 
        
    )
}

export default BannerSlide
