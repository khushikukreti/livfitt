import React from "react";
import Image from "next/image";

function DailyEssential({ imgURL }) {
  return (
    <div className="col-md-12">
      <li className="item">
        <div className="daily-essential1aa">
          <a href="listing.php?category=fragnances">
            <Image
              src={`${imgURL}`}
              layout="fill"
            />
          </a>
        </div>
      </li>
    </div>
  );
}

export default DailyEssential;
