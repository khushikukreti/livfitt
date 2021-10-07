import React from 'react'
import Image from "next/image";

function bannerr({imgURL}) {
    return (
        
                  <div className="imge">
                       <Image src={`${imgURL}`}  layout="fill"/></div>
                 
            
               
               
        
            
    )
}

export default bannerr
