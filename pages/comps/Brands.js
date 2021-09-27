import React from "react";
import Image from 'next/image'

function Brands({ imgURL }) {
  return (
    <>
      <li className="item confetti-button animate">
        <a>
          <Image src={`${imgURL}`} alt="" layout="fill"/>
        </a>
      </li>
    </>
  );
}

export default Brands;
