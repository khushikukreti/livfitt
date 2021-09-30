import React from "react";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function TopCollection({ pname, imgURL }) {
  return (
    <div style={{ padding: "30px" }}>
      <div className="daily-essential1aa">
       <div>
        <a href="">
          <div className="imge">
            <Image src={`${imgURL}`} alt="	" layout="fill" />
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
  );
}

export default TopCollection;
