import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feminine from "./comps/Feminine";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
function ProductDetails() {
  var settings3 = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // setHeight = () => {
  //   // console.log('Click happened');
  //   let st=document.querySelector(".product-detail-product-description-container-box1")
  //   // st.style.
  // }
  return (
    <>
      <section
        className="product-detail-container"
        style={{ marginTop: "60px" }}
      >
        <div className="container">
          <div className="row">
            <div class="col-md-5">
              <div class="product-detail-product-img">
                <div
                  class="show"
                  href="manager/images/product-images/front/nivea-lip-balm-fruity-cherry-shine-4-8g_1.jpg"
                  style={{ position: "relative" }}
                >
                  <img
                    src="https://cosmetikaa.com/manager/images/product-images/front/nivea-lip-balm-fruity-cherry-shine-4-8g_1.jpg"
                    alt="1"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div class="small-img">
                  <img
                    src="https://cosmetikaa.com/images/right-img.png"
                    class="icon-left"
                    alt=""
                    id="prev-img"
                  />
                  <div class="small-container">
                    <div id="small-img-roll">
                      <img
                        src="https://cosmetikaa.com/manager/images/product-images/front/nivea-lip-balm-fruity-cherry-shine-4-8g_1.jpg"
                        class="show-small-img "
                        alt="now"
                        style={{
                          border: "1px solid rgb(149, 27, 37)",
                          padding: "2px",
                        }}
                      />
                    </div>
                  </div>
                  <img
                    src="https://cosmetikaa.com/images/right-img.png"
                    class="icon-right"
                    alt=""
                    id="next-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="product-detail-product-content">
                <div className="row">
                  <div class="product-detail-product-heading-div">
                    <div class="product-detail-product-heading">
                      NIVEA Lip Balm, Fruity Cherry Shine, 4.8g
                    </div>
                    <div class="product-detail-product-quantity">( 4.8g)</div>
                    {/* <div class="product-detail-product-rating">
                    <div class="rating-container rating-xs rating-animate rating-disabled">
                      <div class="rating-stars" title="Five Stars">
                        <span class="empty-stars">
                          <span class="star">
                            <i class="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star-empty"></i>
                          </span>
                        </span>
                        <span class="filled-stars" style={{width: "100%"}}>
                          <span class="star">
                            <i class="glyphicon glyphicon-star"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star"></i>
                          </span>
                          <span class="star">
                            <i class="glyphicon glyphicon-star"></i>
                          </span>
                        </span>
                        <input
                          type="text"
                          class="rating rating-input"
                          value="5"
                          data-size="xs"
                          title=""
                          data-show-caption="false"
                          data-show-clear="false"
                          disabled="disabled"
                        />
                      </div>
                    </div>
                    <span>(5)</span>
                //   </div> */}
                    {/* //   <div class="product-detail-product-review-count">
                //     <a href="#rating-box">5 Rating &amp; 1 Review </a>
                //   </div> */}
                    <div class="product-detail-product-price-box">
                      {" "}
                      <i class="fa fa-rupee"></i> 185{" "}
                      <p>inclusive of all taxes </p>
                    </div>

                    <div class="cart_extra">
                      <div class="cart-product-quantity prd-quantity-txt">
                        Set Quantity:
                      </div>
                      <div class="cart-product-quantity">
                        <div class="quantity">
                          <input type="button" value="-" class="minus" />
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            title="Qty"
                            class="qty"
                            size="4"
                          />
                          <input type="button" value="+" class="plus" />
                        </div>
                      </div>
                    </div>

                    <div class="product-detail-product-btn-info">
                      <div class="product-detail-product-btn">
                        <a href="login.php" class="add-to-wishlist">
                          <i class="fa fa-heart">ADD TO WISHLIST</i>{" "}
                        </a>

                        <button
                          class="btn btn-fill-out add-to-bag-product"
                          onclick="addtocart(this);"
                          data-pro_id="710"
                          type="button"
                        >
                          <i class="icon-basket-loaded "></i> ADD TO CART
                        </button>
                      </div>
                      <div class="product-detail-product-delivery-info">
                        <div class="product-detail-product-delivery-info1">
                          <p>
                            <i class="fa fa-map-marker"></i> DELIVERY IS
                            AVAILABLE AT{" "}
                            <span class="main-color del-pincode">110081</span>
                            <a href="javascript:void(0)" class="changepincode">
                              CHANGE
                            </a>
                          </p>

                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 180.607 180.607"
                            >
                              <path
                                d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607  L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"
                                fill="#d36db3"
                              ></path>
                            </svg>{" "}
                            COD is applicable at this Pincode for orders amount
                            above <i class="fa fa-rupee"></i> 999 /-
                          </p>
                        </div>
                        <form>
                          <div class="product-detail-product-check-pincode">
                            <p>
                              <i class="fa fa-map-marker"></i> DELIVERY OPTIONS
                            </p>
                            <div class="product-detail-product-check-pincode1">
                              <input
                                type="text"
                                placeholder="Enter Pincode"
                                maxlength="6"
                                onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                required=""
                                class="area-code"
                              />
                              <input
                                type="submit"
                                value="CHECK"
                                class="btn-sub"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="side-bar hidden-xs hidden-sm">
                    <div class="custom-block custom-block-1">
                      <div>
                        <div class="icon-div">
                          <em class="porto-icon-shipping icon-size"><LocalShippingIcon style={{fontSize:"26px"}}/></em>
                        </div>
                        <div class="side-tool">
                          <h3>FREE SHIPPING</h3>
                          <p>On Orders Above ₹2500.</p>
                        </div>
                      </div>
                      <div>
                        <div class="icon-div">
                          <em class="porto-icon-rupee icon-size"><PaymentIcon  style={{fontSize:"26px"}}/></em>
                        </div>
                        <div class="side-tool">
                          <h3>MONEY BACK</h3>
                          <p>100% money back guarantee.</p>
                        </div>
                      </div>
                      <div>
                        <div class="icon-div">
                          <em class="porto-icon-support icon-size"><SupportAgentIcon style={{fontSize:"26px"}} /></em>
                        </div>
                        <div class="side-tool">
                          <h3>24/7 SUPPORT</h3>
                          <p>Via Call or Email Support</p>
                        </div>
                      </div>
                      <div>
                        <div class="icon-div">
                          <em class="porto-icon-shipped icon-size"><DeliveryDiningIcon style={{fontSize:"26px"}}/></em>
                        </div>
                        <div class="side-tool">
                          <h3>CASH ON DELIVERY</h3>
                          <p>On Order Above ₹1500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-detail-product-3-steps">
                  <div class="product-detail-product-3-steps1 tooltip-hover">
                    <img src="https://cosmetikaa.com/images/genuine_product.png" />
                    <span>100% GENUINE PRODUCTS</span>
                    {/* <span class="tooltiptext-hover">
                    100% Authentic, 100% money back gaurantee.
                  </span> */}
                  </div>
                  <div class="product-detail-product-3-steps1 tooltip-hover">
                    <img src="https://cosmetikaa.com/images/return_product.png" />
                    <span>EASY RETURN POLICY</span>
                    {/* <span class="tooltiptext-hover">
                    Returns/replacements are accepted for unused products only
                    in case of defects, damages during delivery, missing, or
                    wrong products delivered. Return requests can be raised on
                    the 'My Order' section within 5 days of delivery.
                  </span> */}
                  </div>
                  <div class="product-detail-product-3-steps1">
                    <span>SOLD BY :COSMETIKAA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-detail-2">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div class="heading2">PRODUCT DESCRIPTION</div>
              <div class="product-detail-product-description-container">
                <ul class="product-detail-product-description-container-tabs">
                  <li class="active open-description-box">DESCRIPTION</li>
                  <li class="open-ingredient-box">SPECIFICATIONS</li>
                  <li class="open-howuse-box">MORE</li>
                </ul>
                <div class="product-detail-product-description-container-box description-box">
                  <div class="product-detail-product-description-container-box1">
                    <p></p>
                    <p>
                      A foaming creamy cleanser that gently cleanses your skin
                      and removes impurities. Leaves your skin softened with a
                      silky smooth after-feel and fresh floral fragrance.
                    </p>
                    <p></p>
                  </div>
                  <div class="product-detail-product-description-container-box-show-more">
                    Read More <i class="fa fa-angle-down"></i>
                  </div>
                </div>

                <div class="product-detail-product-description-container-box ingredient-box">
                  <div class="product-detail-product-description-container-box1">
                    <p>
                      <b>Key Features</b>
                    </p>
                    <ul>
                      <li></li>
                    </ul>
                    <p>
                      <b>General</b>
                    </p>
                    <table class="product-detail-table">
                      <tbody>
                        <tr>
                          <td>Brand</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Model Name</td>
                          <td>
                            Oriflame Optimals Clear White Lightening Cleansing
                            Foam-150ml
                          </td>
                        </tr>
                        {/* <!--<tr><td>Quantity</td><td>1</td></tr>--> */}
                        <tr>
                          <td>Best Before</td>
                          <td>36 Months</td>
                        </tr>
                        <tr>
                          <td>Pack of</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>Suitable for</td>
                          <td>Skin brightning</td>
                        </tr>
                        <tr>
                          <td>Type</td>
                          <td>Cleanser</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="product-detail-product-description-container-box-show-more">
                    Read More <i class="fa fa-angle-down"></i>
                  </div>
                </div>

                <div class="product-detail-product-description-container-box howuse-box">
                  <div
                    class="product-detail-product-description-container-box1"
                    // onClick={setHeight}
                  >
                    <table class="product-detail-table">
                      <tbody>
                        <tr>
                          <td>Manufacturer</td>
                          <td>Oriflame India Private Limited</td>
                        </tr>
                        <tr>
                          <td>Mfd Date</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Country of Origin</td>
                          <td>India</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="product-detail-product-description-container-box-show-more">
                    Read More <i class="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>
              <div class="heading2">CUSTOMERS ALSO VIEWED</div>
              <div className="product-detail-other-product-slider">
                <div className="padd">
                  <Slider {...settings3}>
                    <Feminine
                      imgURL="/product1.jpg"
                      pname="Gainer Collection"
                      pprice={489}
                    />
                    <Feminine
                      imgURL="/product2.jpg"
                      pname="Gainer Collection"
                      pprice={489}
                    />
                    <Feminine
                      imgURL="/product3.jpg"
                      pname="Gainer Collection"
                      pprice={489}
                    />
                    <Feminine
                      imgURL="/product4.jpg"
                      pname="Gainer Collection"
                      pprice={489}
                    />
                    <Feminine
                      imgURL="/product5.jpg"
                      pname="Gainer Collection"
                      pprice={489}
                    />
                    <Feminine
                      imgURL="/product1.jpg"
                      pname="Gainer Collection"
                      pprice={489}
                    />
                  </Slider>
                </div>
              </div>
              <div class="heading2">REVIEW &amp; RATINGS</div>
              <div class="product-detail-rating-review-box" id="rating-box">
                <div class="product-detail-overall-review-box">
                  <div class="product-detail-overall-review-box1">
                    <div class="product-detail-overall-review-box1a">
                      <strong>5</strong>
                      <span>/1</span>
                    </div>
                    <div class="product-detail-overall-review-box1b">
                      <strong>Overall Rating</strong>
                      <span>1</span>
                    </div>
                  </div>

                  <div class="product-detail-overall-review-box2">
                    <a href="">Write Review</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-xs-6 visible-lg visible-md"
              style={{position:"sticky", top:"20px", marginTop: "85px"}}
            >
               <Feminine
                      imgURL="/product1.jpg"
                      pname="Gainer Collection"
                      pprice={489}
                    />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
