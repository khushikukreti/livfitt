import React from "react";
import Feminine from "./comps/Feminine";

function ProductListing() {
  return (
      <>
     
    <section className="listing-heading-section" style={{paddingTop:"40px"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div class="col-md-3 ps-sticky">
                <div
                  class="listing-product-filter-box"
                  style={{ color: "black" }}
                >
                  <form name="sortfrm" class="sortfrm" method="post">
                    <div class="close-listing-filter-box hidden-lg hidden-md">
                      <i class="fa fa-close"></i>
                    </div>

                    <div class="listing-product-by-sort">
                      <div class="listing-product-by-sort-heading">
                        SORT BY: <i class="fa fa-plus"></i>
                      </div>
                      <div class="listing-product-by-sort-options">
                        <label class="con">
                          Popularity
                          <input
                            type="radio"
                            class="sortby"
                            name="sortby"
                            value="order by prd.best_seller desc"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="con">
                          Price - Low to High
                          <input
                            type="radio"
                            name="sortby"
                            class="sortby"
                            value="order by prd.pro_price*1 asc"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="con">
                          Price - High to Low
                          <input
                            type="radio"
                            name="sortby"
                            class="sortby"
                            value="order by prd.pro_price*1 desc"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="con">
                          Newest First
                          <input
                            type="radio"
                            name="sortby"
                            class="sortby"
                            value="order by prd.new_arrival desc"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>

                    <div class="listin-product-filter-list">
                      <div class="listing-product-filter-list-heading">
                        PRICE <i class="fa fa-plus"></i>
                      </div>
                      <div
                        class="listing-product-filter-list-options"
                        style={{ padding: "0 5px" }}
                      >
                        <div
                          id="slider-range"
                          class="price-filter-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                          name="rangeInput"
                        >
                          <div
                            class="ui-slider-range ui-corner-all ui-widget-header"
                            style={{ left: "0%", width: "100%" }}
                          ></div>
                          <span
                            tabindex="0"
                            class="ui-slider-handle ui-corner-all ui-state-default"
                            style={{ left: "0%" }}
                          ></span>
                          <span
                            tabindex="0"
                            class="ui-slider-handle ui-corner-all ui-state-default"
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
                            class="price-range-field"
                          />{" "}
                          &nbsp; to &nbsp;
                          <input
                            type="number"
                            min="80"
                            max="5800"
                            id="max_price"
                            name="max"
                            class="price-range-field"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="listin-product-filter-list">
                      <div class="listing-product-filter-list-heading">
                        BRAND <i class="fa fa-plus"></i>
                      </div>
                      <div class="listing-product-filter-list-options">
                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="3"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Wella Professionals{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="4"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Schwarzkopf
                          Professional{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="5"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Lotus Professional{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="6"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Matrix{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="7"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Loreal professionnel{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="8"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Nivea{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="9"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Dove{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="10"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Moehair{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="11"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Raaga{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="12"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Olaplex{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="14"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Love Nature{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="15"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> WOW{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="16"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> The Body Shop{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="17"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> bhave{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="18"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> TYA{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="19"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Cheryls{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="20"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> GK Global Keratin{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="21"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Godrej Professional{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="22"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> LuxLiss Professional{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="23"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> MattLook{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="24"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Moehair{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="25"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> O3+{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="26"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Streax{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="27"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Oriflame Sweden{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="28"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Beardo{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="29"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Himalaya{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="30"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Gillette{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="31"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> De Fabulous{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="32"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Garnier{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="33"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> VLCC{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="34"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Whisper{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="35"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Ustraa{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="36"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Herbalife{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="37"
                            name="filterbrand[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> RICA{" "}
                        </label>
                      </div>
                    </div>

                    <div class="listin-product-filter-list">
                      <div class="listing-product-filter-list-heading">
                        CATEGORY <i class="fa fa-plus"></i>
                      </div>
                      <div class="listing-product-filter-list-options">
                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="1"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Oil{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="2"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Shampoo{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="12"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Care Combo{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="13"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Conditioner{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="14"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Serum{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="16"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Masks &amp;
                          Creams{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="17"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Mousse{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="18"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Spray{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="22"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Gels &amp; Waxes{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="24"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Dry-Shampoo{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="29"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Color{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="30"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Treatment{" "}
                        </label>

                        <label class="chek-1">
                          <input
                            type="checkbox"
                            value="62"
                            name="filtercat[]"
                            class="sortby"
                          />
                          <span class="checkmark1"></span> Hair Wax{" "}
                        </label>
                      </div>
                    </div>

                    <div class="filter-btns">
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
                  <div className="col-md-4 col-xs-6 pd-0">
                    {" "}
                    <Feminine
                      pname="Product detail"
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    {" "}
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
                      imgURL="/image.jpg"
                      pprice={234}
                    />
                  </div>
                  <div className="col-md-4 col-xs-6 pd-0">
                    <Feminine
                      pname="Product detail "
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
