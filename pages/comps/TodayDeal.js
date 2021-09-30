import React from "react";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function TodayDeal({imgURL,pname}) {
  return (
    <>
    <div className="col-md-12">
      <div className="padd2">
    <div className="item">
        <div className=" daily-essential1aa" >
          <div>
          <a>
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
<div  className="text-div">
          <p className="daily-text">
            {`${pname}`}
          </p>
          </div>
        </div>
      </div>
      </div>
    </div>
      
    </>
  );
}

export default TodayDeal;
