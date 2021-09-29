import React from "react";
import Image from "next/image";
function TodayDeal({imgURL,pname}) {
  return (
    <>
    <div className="col-md-12">
      <div className="padd2">
    <div className="item">
        <div className=" daily-essential1aa" >
          <a>
            <div className="">
              <Image
                src={`${imgURL}`}
                layout="fill"
              />
            </div>
          </a>
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
