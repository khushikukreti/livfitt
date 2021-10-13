import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feminine from "./comps/Feminine";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ProductDescription from "./comps/ProductDescription";
function ProductDetails() {
  var settings3 = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const changeImage = (e) => {
    let x = e.target;
    let srcc = x.getAttribute("src");
    let srccset = x.getAttribute("srcset");
    console.log(srcc);
    let image = document.querySelector(".imge").childNodes[0];
    image.childNodes[0].setAttribute("src", srcc);
    image.childNodes[0].setAttribute("srcset", srccset);

    // console.log(image2);
  };

  return (
    <>
      <section
        className="product-detail-container"
        style={{ paddingTop: "60px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="product-detail-product-img">
                <div
                  className=""
                  href="manager/images/product-images/front/nivea-lip-balm-fruity-cherry-shine-4-8g_1.jpg"
                  style={{ position: "relative" }}
                >
                  <div className="imge">
                    <Image
                      src="/Listingimg1.jpg"
                      alt="1"
                      layout="fill"
                      style={{ width: "100%", height: "100%" }}
                      id="1"
                    />
                  </div>
                </div>
                <div className="small-img">
                  {/* <div className="imge">
                    <Image
                      src="https://cosmetikaa.com/images/right-img.png"
                      className="icon-left"
                      layout="fill"
                      alt=""
                      id="prev-img"
                    />
                  </div> */}
                  <div className="small-container">
                    <div id="small-img-roll" onClick={changeImage}>
                      <Image src="/ListingMain.jpg" layout="fill"></Image>

                      {/* <div className="imge">
                        <Image
                          src="/product4.jpg"
                          className="show-small-img "
                          layout="fill"
                          alt="now"
                          style={{
                            border: "1px solid rgb(149, 27, 37)",
                            padding: "2px",
                          }}
                        />
                      </div> */}
                    </div>
                    <div id="small-img-roll" onClick={changeImage}>
                      <Image src="/Listingimg1.jpg" layout="fill"></Image>
                    </div>
                    <div id="small-img-roll" onClick={changeImage}>
                      <Image src="/Listingimg2.jpg" layout="fill"></Image>
                    </div>
                    <div id="small-img-roll" onClick={changeImage}>
                      <Image src="/Listingimg3.jpg" layout="fill"></Image>
                    </div>
                    <div id="small-img-roll" onClick={changeImage}>
                      <Image src="/Listingimg4.jpg" layout="fill"></Image>
                    </div>
                  </div>
                  {/* <div className="imge">
                    <Image
                      src="https://cosmetikaa.com/images/right-img.png"
                      className="icon-right"
                      layout="fill"
                      alt=""
                      id="next-img"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="product-detail-product-content">
                <div className="">
                  <div className="product-detail-product-heading-div">
                    <p>Vendor name</p>
                    <div className="product-detail-product-heading">
                      Lean Body, Meal Replacement, 4.8g
                    </div>
                    <div className="product-detail-product-quantity">
                      ( 4.8g)
                    </div>
                    {/* <div className="product-detail-product-rating">
                    <div className="rating-container rating-xs rating-animate rating-disabled">
                      <div className="rating-stars" title="Five Stars">
                        <span className="empty-stars">
                          <span className="star">
                            <i className="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star-empty"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star-empty"></i>
                          </span>
                        </span>
                        <span className="filled-stars" style={{width: "100%"}}>
                          <span className="star">
                            <i className="glyphicon glyphicon-star"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star"></i>
                          </span>
                          <span className="star">
                            <i className="glyphicon glyphicon-star"></i>
                          </span>
                        </span>
                        <input
                          type="text"
                          className="rating rating-input"
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
                    {/* //   <div className="product-detail-product-review-count">
                //     <a href="#rating-box">5 Rating &amp; 1 Review </a>
                //   </div> */}
                    <div className="product-detail-product-price-box">
                      {" "}
                      <i className="fa fa-rupee"></i> ₹ 185{" "}
                      <p>inclusive of all taxes </p>
                    </div>

                    <div className="cart_extra">
                      <div className="cart-product-quantity prd-quantity-txt">
                        Set Quantity:
                      </div>
                      <div className="cart-product-quantity">
                        <div className="quantity">
                          <input type="button" value="-" className="minus" />
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            title="Qty"
                            className="qty"
                            size="4"
                          />
                          <input type="button" value="+" className="plus" />
                        </div>
                      </div>
                    </div>

                    <div className="product-detail-product-btn-info">
                      <div className="product-detail-product-btn">
                        <a href="login.php" className="add-to-wishlist">
                          <i className="fa fa-heart">ADD TO WISHLIST</i>{" "}
                        </a>

                        <button
                          className="btn btn-fill-out add-to-bag-product"
                          // onclick="addtocart(this);"
                          data-pro_id="710"
                          type="button"
                        >
                          <i className="icon-basket-loaded "></i> ADD TO CART
                        </button>
                      </div>
                      <div className="product-detail-product-delivery-info">
                        <div className="product-detail-product-delivery-info1">
                          <p>
                            <i className="fa fa-map-marker"></i> DELIVERY IS
                            AVAILABLE AT{" "}
                            <span className="main-color del-pincode">
                              110081
                            </span>
                            <a
                              href="javascript:void(0)"
                              className="changepincode"
                            >
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
                            above <i className="fa fa-rupee"></i> 999 /-
                          </p>
                        </div>
                        <form>
                          <div className="product-detail-product-check-pincode">
                            <p>
                              <i className="fa fa-map-marker"></i> DELIVERY
                              OPTIONS
                            </p>
                            <div className="product-detail-product-check-pincode1">
                              <input
                                type="text"
                                placeholder="Enter Pincode"
                                maxLength="6"
                                onKeyPress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                required=""
                                className="area-code"
                              />
                              <input
                                type="submit"
                                value="CHECK"
                                className="btn-sub"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="side-bar hidden-xs hidden-sm">
                    <div className="custom-block custom-block-1">
                      <div>
                        <div className="icon-div">
                          <em className="porto-icon-shipping icon-size">
                            <LocalShippingIcon style={{ fontSize: "26px" }} />
                          </em>
                        </div>
                        <div className="side-tool">
                          <h3>FREE SHIPPING</h3>
                          <p>On Orders Above ₹2500.</p>
                        </div>
                      </div>
                      <div>
                        <div className="icon-div">
                          <em className="porto-icon-rupee icon-size">
                            <PaymentIcon style={{ fontSize: "26px" }} />
                          </em>
                        </div>
                        <div className="side-tool">
                          <h3>MONEY BACK</h3>
                          <p>100% money back guarantee.</p>
                        </div>
                      </div>
                      <div>
                        <div className="icon-div">
                          <em className="porto-icon-support icon-size">
                            <SupportAgentIcon style={{ fontSize: "26px" }} />
                          </em>
                        </div>
                        <div className="side-tool">
                          <h3>24/7 SUPPORT</h3>
                          <p>Via Call or Email Support</p>
                        </div>
                      </div>
                      <div>
                        <div className="icon-div">
                          <em className="porto-icon-shipped icon-size">
                            <DeliveryDiningIcon style={{ fontSize: "26px" }} />
                          </em>
                        </div>
                        <div className="side-tool">
                          <h3>CASH ON DELIVERY</h3>
                          <p>On Order Above ₹1500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-detail-product-3-steps">
                  <div className="product-detail-product-3-steps1 tooltip-hover">
                    <div className="imge">
                      <Image
                        src="https://cosmetikaa.com/images/genuine_product.png"
                        layout="fill"
                      />
                    </div>
                    <span>100% GENUINE PRODUCTS</span>
                    {/* <span className="tooltiptext-hover">
                    100% Authentic, 100% money back gaurantee.
                  </span> */}
                  </div>
                  <div className="product-detail-product-3-steps1 tooltip-hover">
                    <div className="imge">
                      <Image
                        src="https://cosmetikaa.com/images/return_product.png"
                        layout="fill"
                      />
                    </div>
                    <span>EASY RETURN POLICY</span>
                    {/* <span className="tooltiptext-hover">
                    Returns/replacements are accepted for unused products only
                    in case of defects, damages during delivery, missing, or
                    wrong products delivered. Return requests can be raised on
                    the 'My Order' section within 5 days of delivery.
                  </span> */}
                  </div>
                  <div className="product-detail-product-3-steps1">
                    <span>SOLD BY :vendor name</span>
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
              <div className="heading2">PRODUCT DESCRIPTION</div>
              <ProductDescription></ProductDescription>
              <div className="heading2" style={{paddingTop:"11px"}}>CUSTOMERS ALSO VIEWED</div>
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
              <div className="heading2">REVIEW &amp; RATINGS</div>
              <div className="product-detail-rating-review-box" id="rating-box">
                <div className="product-detail-overall-review-box">
                  <div className="product-detail-overall-review-box1">
                    <div className="product-detail-overall-review-box1a">
                      <strong>5</strong>
                      <span>/1</span>
                    </div>
                    <div className="product-detail-overall-review-box1b">
                      <strong>Overall Rating</strong>
                      <span>1</span>
                    </div>
                  </div>

                  <div className="product-detail-overall-review-box2">
                    <a href="">Write Review</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-xs-6 visible-lg visible-md"
              style={{ position: "sticky", top: "20px", marginTop: "85px" }}
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
