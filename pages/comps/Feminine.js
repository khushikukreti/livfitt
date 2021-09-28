import React from "react";
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart} from '@fortawesome/free-solid-svg-icons';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Feminine({ pname, imgURL, pprice }) {
  return (
    <>
      <div className="col-md-12">
        <div class="item">
          <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins"></a>
          <div class="listing-product-box">
            <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins">
              <div class="listing-product-box-img">
                <Image src={`${imgURL}`}  layout="fill"/>
              </div>
              <div class="listing-product-box-txt">
                <p>
                 {`${pname}`}
                </p>
              </div>
              <div class="product-price-label">
                <span class="product-new-price">
                  <i class="fa fa-rupee"></i>{`${pprice}`}
                </span>
              </div>
              <div class="listing-product-box-rating">
                <div class="rating-container rating-xs rating-animate rating-disabled">
                  <div class="rating-stars" title="Five Stars">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/> 
                  </div>
                </div>{" "}
                <span class="rating_num"></span>
              </div>
            </a>
            <div class="listing-product-box-btns">
              <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins"></a>
              <div class="listing-product-box-wishlist-btn">
                <a href="product-detail.php?slug=whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins"></a>
                <a href="javascript:void(0);">
                <FavoriteBorderIcon style={{fontSize: "36px", verticalAlign: "bottom"}} />

                </a>
              </div>
              <div class="listing-product-box-addtocart-btn">
                <a
                  href="javascript:void(0);"
                  class="addtocart"
                  data-pro_id="681"
                >
                  ADD TO BAG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feminine;
