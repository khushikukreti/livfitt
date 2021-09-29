import React from "react";
import Image from "next/image";
function TopCollection({ pname, imgURL }) {
  return (
    <div style={{padding:"30px"}}>
    <div class="daily-essential1aa" >
      
      <a href="">
        <Image src={`${imgURL}`} alt="	" layout="fill" />
      </a>
      <div className="text">
        <p class="daily-text">{pname}</p>
      </div>
      </div>
      </div>
  );
}

export default TopCollection;
