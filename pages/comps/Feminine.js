import React from "react";
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart} from '@fortawesome/free-solid-svg-icons';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Feminine({ pname, imgURL, pprice }) {
  return (
    <>
      <div className="col-md-12" style={{paddingTop:"30px", paddingBottom:"30px"}}>
        <div className="item">
          <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins"></a>
          <div className="listing-product-box">
            <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins">
              <div className="listing-product-box-img">
                <div className="imge"> <Image src={`${imgURL}`}  layout="fill"/></div>
               
                <div className="item-wrapper" style={{position:"absolute !importat"}}>
                  <a className="addBag" href=""> < LocalMallIcon className="bag"/></a>
                  <a className="addWhislist" href=""> <FavoriteBorderIcon className="bag2"/></a>

                </div>
              </div>
              <div className="listing-product-box-txt">
                <p>
                 {`${pname}`}
                </p>
              </div>
              <div className="product-price-label">
                <span className="product-new-price">
                 {`₹ ${pprice}`} <span className="priceCut">  (₹ ${pprice})</span>
                </span>
              </div>
              <div className="listing-product-box-rating">
                <div className="rating-container rating-xs rating-animate rating-disabled">
                  <div className="rating-stars" title="Five Stars">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/> 
                  </div>
                </div>{" "}
                <span className="rating_num"></span>
              </div>
            </a>
            {/* <div className="listing-product-box-btns">
              <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins"></a>
              <div className="listing-product-box-wishlist-btn">
                <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins"></a>
                <a href="javascript:void(0);">
                <FavoriteBorderIcon style={{fontSize: "36px", verticalAlign: "bottom"}} />

                </a>
              </div>
              <div className="listing-product-box-addtocart-btn">
                <a
                  href="javascript:void(0);"
                  className="addtocart"
                  data-pro_id="681"
                >
                  ADD TO BAG
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feminine;
