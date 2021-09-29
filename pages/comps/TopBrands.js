import React from "react";
import Image from 'next/image'
function TopBrands({ imgURL }) {
  return (
    <>
      
      <div className="col-md-12 col-xs-6" >
        <div className="padd3">
        <div className="brands-for-youa">
          <a >
            <Image
              src={`${imgURL}`}
              layout="fill"
            />
          </a>
        </div>
        </div>
      </div>
    </>
  );
}

export default TopBrands;

