import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Feminine from "./comps/Feminine";
import Head from "next/head";
import BreadCrum from "./comps/BreadCrum";
import ListedProducts from "./comps/ListedProducts";
function ProductListing() {
  let [flag, setFlag] = useState("false");
  const openFilterBox=(e)=>{
    let openBox=document.querySelector(".ps-sticky");
    openBox.style.left="0"
  }
  const closeFilter=(e)=>{
    let openBox=document.querySelector(".ps-sticky");
    openBox.style.left="-100%"
  }
  const showPrice = (e) => {
    console.log("clicked");
    // console.log("clicked");
    let headd = e.target.nextElementSibling;
    console.log(headd);
    if (flag) {
      headd.style.display = "block";
      setFlag(!flag);
    } else {
      headd.style.display = "none";
      setFlag(!flag);
    }
    // console.log(headd);
    // if(flag){
    //  headd.style.display="block";
    //   setFlag(!flag);
    // }else{
    //   headd.style.display="none";
    //   setFlag(!flag);
    // }
  };
  const showBrand = (e) => {
    console.log("clicked");
    let headd = e.target.nextElementSibling;
    console.log(headd);
    if (flag) {
      headd.style.display = "block";
      setFlag(!flag);
    } else {
      headd.style.display = "none";
      setFlag(!flag);
    }
  };
  const showCategory = (e) => {
    console.log("clicked");
    let headd = e.target.nextElementSibling;
    console.log(headd);
    if (flag) {
      headd.style.display = "block";
      setFlag(!flag);
    } else {
      headd.style.display = "none";
      setFlag(!flag);
    }
  };
  return (
    <>
      {/* <Head>
        <script type="text/javascript" src="js/jquery.js"></script>

        <script type="text/javascript" src="js/custom.js"></script>
      </Head> */}
      <BreadCrum></BreadCrum>
      <section
        className="listing-heading-section"
        style={{ paddingTop: "15px" }}
      >
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <div
                class="open-filter-box hidden-md hidden-lg"
                style={{position: "absolute", top: "0px"}}
                onClick={openFilterBox}
              >
                <img src="https://cosmetikaa.com/images/filter-icon.png" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 ps-sticky">
                  <div
                    className="listing-product-filter-box"
                    style={{ color: "black" , marginTop:"10px"}}
                  >
                    <form name="sortfrm" className="sortfrm" method="post">
                      <div className="close-listing-filter-box hidden-lg hidden-md" onClick={closeFilter}>
                        <CloseIcon/>
                      </div>

                      <div className="listing-product-by-sort">
                        <div className="listing-product-by-sort-heading">
                          SORT BY: <i className="fa fa-plus"></i>
                        </div>
                        <div className="listing-product-by-sort-options">
                          <label className="con">
                            Popularity
                            <input
                              type="radio"
                              className="sortby"
                              name="sortby"
                              value="order by prd.best_seller desc"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="con">
                            Price - Low to High
                            <input
                              type="radio"
                              name="sortby"
                              className="sortby"
                              value="order by prd.pro_price*1 asc"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="con">
                            Price - High to Low
                            <input
                              type="radio"
                              name="sortby"
                              className="sortby"
                              value="order by prd.pro_price*1 desc"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="con">
                            Newest First
                            <input
                              type="radio"
                              name="sortby"
                              className="sortby"
                              value="order by prd.new_arrival desc"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>

                      <div className="listin-product-filter-list">
                        <div
                          className="listing-product-filter-list-heading"
                          onClick={showPrice}
                        >
                          PRICE <i className="fa fa-plus"></i>
                        </div>
                        <div
                          className="listing-product-filter-list-options"
                          style={{ padding: "0 5px" }}
                        >
                          <div
                            id="slider-range"
                            className="price-filter-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                            name="rangeInput"
                          >
                            <div
                              className="ui-slider-range ui-corner-all ui-widget-header"
                              style={{ left: "0%", width: "100%" }}
                            ></div>
                            <span
                              tabIndex="0"
                              className="ui-slider-handle ui-corner-all ui-state-default"
                              style={{ left: "0%" }}
                            ></span>
                            <span
                              tabIndex="0"
                              className="ui-slider-handle ui-corner-all ui-state-default"
                              style={{ left: "100%" }}
                            ></span>
                          </div>
                          <div style={{ margin: "30px auto" }}>
                            <input
                              type="number"
                              min="80"
                              max="5800"
                              id="min_price"
                              name="min"
                              className="price-range-field"
                            />{" "}
                            &nbsp; to &nbsp;
                            <input
                              type="number"
                              min="80"
                              max="5800"
                              id="max_price"
                              name="max"
                              className="price-range-field"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="listin-product-filter-list">
                        <div
                          className="listing-product-filter-list-heading"
                          onClick={showPrice}
                        >
                          BRAND <i className="fa fa-plus"></i>
                        </div>
                        <div className="listing-product-filter-list-options">
                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="3"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Brand1{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="4"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Brand2{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="5"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Brand3{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="6"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Brand4{" "}
                          </label>

                          {/* <label className="chek-1">
                            <input
                              type="checkbox"
                              value="7"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Loreal
                            professionnel{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="8"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Nivea{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="9"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Dove{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="10"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Moehair{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="11"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Raaga{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="12"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Olaplex{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="14"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Love Nature{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="15"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> WOW{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="16"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> The Body Shop{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="17"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> bhave{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="18"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> TYA{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="19"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Cheryls{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="20"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> GK Global
                            Keratin{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="21"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Godrej
                            Professional{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="22"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> LuxLiss
                            Professional{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="23"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> MattLook{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="24"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Moehair{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="25"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> O3+{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="26"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Streax{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="27"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Oriflame Sweden{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="28"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Beardo{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="29"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Himalaya{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="30"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Gillette{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="31"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> De Fabulous{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="32"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Garnier{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="33"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> VLCC{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="34"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Whisper{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="35"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Ustraa{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="36"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Herbalife{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="37"
                              name="filterbrand[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> RICA{" "}
                          </label> */}
                        </div>
                      </div>

                      <div className="listin-product-filter-list">
                        <div
                          className="listing-product-filter-list-heading"
                          onClick={showPrice}
                        >
                          CATEGORY <i className="fa fa-plus"></i>
                        </div>
                        <div className="listing-product-filter-list-options">
                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="1"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Category1{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="2"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Category2{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="12"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Category3{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="13"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Category4{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="14"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Category5{" "}
                          </label>

                          {/* <label className="chek-1">
                            <input
                              type="checkbox"
                              value="16"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Hair Masks
                            &amp; Creams{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="17"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Hair Mousse{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="18"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Hair Spray{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="22"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Hair Gels &amp;
                            Waxes{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="24"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Dry-Shampoo{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="29"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Hair Color{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="30"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Hair Treatment{" "}
                          </label>

                          <label className="chek-1">
                            <input
                              type="checkbox"
                              value="62"
                              name="filtercat[]"
                              className="sortby"
                            />
                            <span className="checkmark1"></span> Hair Wax{" "}
                          </label> */}
                        </div>
                      </div>

                      <div className="filter-btns">
                        <a href="https://cosmetikaa.com/listing.php?category=hair-care-styling">
                          CLEAR
                        </a>
                        <button type="submit">FILTER</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row catalogProduct">
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      {" "}
                      <ListedProducts
                        pname="Product Detail"
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      {" "}
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                    <div className="col-md-4 col-xs-6 pd-0" style={{padding:"0px"}}>
                      <ListedProducts
                        pname="Product Detail "
                        imgURL="/image.jpg"
                        pprice={234}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductListing;
