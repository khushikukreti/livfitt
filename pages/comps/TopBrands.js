import React from "react";
import Image from 'next/image'
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function TopBrands({ imgURL, pname }) {
  return (
    <>
      
      <div className="col-md-12 col-xs-6" >
        <div className="padd3">
        <div className="brands-for-youa">
          <div>
          <a >
            <div className="imge">
            <Image
              src={`${imgURL}`}
              layout="fill"
            />
            </div>
            <div
            className="item-wrapper"
            style={{ position: "absolute !importat", }}
          >
            <a className="addBag" href="">
              <LocalMallIcon className="bag" />
            </a>
            <a className="addWhislist" href="">
              <FavoriteBorderIcon className="bag2" />
            </a>
          </div>
          </a>
          </div>
          <div className="text">
          <p className="daily-text">{pname}</p>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default TopBrands;

