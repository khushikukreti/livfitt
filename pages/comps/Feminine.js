import React from "react";
import Image from 'next/image'
function Feminine({pname,imgURL,pprice}) {
  return (
    <>
    <div className="col-md-12">
    <div className="item">
        <a ></a>
        <div className="listing-product-box">
          <a>
            <div className="listing-product-box-img">
              <Image src={`${imgURL}`} layout="fill" />
            </div>
            <div className="listing-product-box-txt">
              <p>{`${pname}`}</p>
            </div>
            <div className="product-price-label">
              <span className="product-new-price">
                <i className="fa fa-rupee"></i>
                {`${pprice}`}
              </span>
            </div>
          
          </a>
         
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Feminine;
