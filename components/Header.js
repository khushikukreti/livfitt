import React from "react";
// import "../styles/custom
import Image from 'next/image'
function Header() {
  return (
    <div>
      <section className="pre-header3">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-4">
              <div className="pre-header3b">
                <a>
                  <Image src="/logo3.png" layout="fill" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="pre-header3a">
                <form action="">
                  <input type="text" placeholder="what are you looking for?" />
                  <button  className="buttonn" type="submit">
                    <Image
                      src="https://cosmetikaa.com/images/search.png"
                     layout="fill"
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-xs-8">
              <div className="pre-header3c">
                <ul>
                  <li className="open-searchbar hidden-md hidden-lg">
                    <a>
                      {" "}
                      <Image
                        src="https://cosmetikaa.com/images/search.png"
                        layout="fill"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <Image
                        src="https://cosmetikaa.com/images/like.png"
                        layout="fill"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <Image
                        src="https://cosmetikaa.com/images/cart.png"
                        layout="fill"
                      />
                      <span className="bag-label">0</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Image
                        src="https://cosmetikaa.com/images/user.png"
                        layout="fill"
                      />{" "}
                      <p className="account">Account</p>
                    </a>
                  </li>
                  <li className="open-sidebar hidden-md hidden-lg">
                    <a>
                      <i className="fa fa-bars"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pre-header4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pre-header4b">
                <ul>
                  {/* <li className="hidden-md hidden-lg" ><Image src="images/logo.png"/>  <i className="fa fa-close close-sidebar"></i> </li> */}
                  <li>
                    <a>
                      {/* <Image src="" layout="fill"/> */}
                      <span>
                        Hair Care &amp; Styling{" "}
                        <i className="fa fa-angle-down hidden-sm hidden-xs"></i>
                      </span>
                      <i className="fa fa-plus hidden-md hidden-lg"></i>
                    </a>
                    <ul>
                      <li>
                        <a>Hair Oil</a>
                      </li>
                      <li>
                        <a>Hair Shampoo</a>
                      </li>
                      <li>
                        <a>Hair Care Combo</a>
                      </li>
                      <li>
                        <a>Hair Conditioner</a>
                      </li>
                      <li>
                        <a>Hair Serum</a>
                      </li>
                      <li>
                        <a>Hair Masks &amp; Creams</a>
                      </li>
                      <li>
                        <a>Hair Mousse</a>
                      </li>
                      <li>
                        <a>Hair Spray</a>
                      </li>
                      <li>
                        <a>Hair Gels &amp; Waxes</a>
                      </li>
                      <li>
                        <a>Dry-Shampoo</a>
                      </li>
                      <li>
                        <a>Hair Color </a>
                      </li>
                      <li>
                        <a>Hair Treatment</a>
                      </li>
                      <li>
                        <a>Hair Wax </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      {/* <Image src="" layout="fill"/> */}
                      <span>
                        Bath &amp; Body Care{" "}
                        <i className="fa fa-angle-down hidden-sm hidden-xs"></i>
                      </span>
                      <i className="fa fa-plus hidden-md hidden-lg"></i>
                    </a>
                    <ul>
                      <li>
                        <a>Face Care Combo</a>
                      </li>
                      <li>
                        <a>Lip Care</a>
                      </li>
                      <li>
                        <a>Face Wash</a>
                      </li>
                      <li>
                        <a>Face Oil</a>
                      </li>
                      <li>
                        <a>Shower Gel</a>
                      </li>
                      <li>
                        <a>Moisturizer cream</a>
                      </li>
                      <li>
                        <a>Face cream</a>
                      </li>
                      <li>
                        <a>Face Serum</a>
                      </li>
                      <li>
                        <a>Sunscreen</a>
                      </li>
                      <li>
                        <a>Cleanser</a>
                      </li>
                      <li>
                        <a>Toner</a>
                      </li>
                      <li>
                        <a>Facial Kit</a>
                      </li>
                      <li>
                        <a>Scrub</a>
                      </li>
                      <li>
                        <a>Face Pack</a>
                      </li>
                      <li>
                        <a>Bleach</a>
                      </li>
                      <li>
                        <a>Soap</a>
                      </li>
                      <li>
                        <a>Body Lotion</a>
                      </li>
                      <li>
                        <a>Foot cream</a>
                      </li>
                      <li>
                        <a>Night cream</a>
                      </li>
                      <li>
                        <a>Day cream</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      {/* <Image src="" layout="fill"/> */}
                      <span>
                        Makeup{" "}
                        <i className="fa fa-angle-down hidden-sm hidden-xs"></i>
                      </span>
                      <i className="fa fa-plus hidden-md hidden-lg"></i>
                    </a>
                    <ul>
                      <li>
                        <a>Face</a>
                      </li>
                      <li>
                        <a>Nails</a>
                      </li>
                      <li>
                        <a>Makeup Kit Combo </a>
                      </li>
                      <li>
                        <a>Makeup Kit </a>
                      </li>
                      <li>
                        <a>Makeup Brushes </a>
                      </li>
                      <li>
                        <a>Sponge Puff</a>
                      </li>
                      <li>
                        <a>Foundation</a>
                      </li>
                      <li>
                        <a>Primer</a>
                      </li>
                      <li>
                        <a>Concealer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      {/* <Image src="" layout="fill"/> */}
                      <span>
                        Fragnances{" "}
                        <i className="fa fa-angle-down hidden-sm hidden-xs"></i>
                      </span>
                      <i className="fa fa-plus hidden-md hidden-lg"></i>
                    </a>
                    <ul>
                      <li>
                        <a>Deodorants</a>
                      </li>
                      <li>
                        <a>Perfume</a>
                      </li>
                      <li>
                        <a>Body Mist</a>
                      </li>
                      <li>
                        <a>Talcum Powder</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <span>
                        Feminine Hygiene{" "}
                        <i className="fa fa-angle-down hidden-sm hidden-xs"></i>
                      </span>
                      <i className="fa fa-plus hidden-md hidden-lg"></i>
                    </a>
                    <ul>
                      <li>
                        <a>Sanitary Napkins</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      {/* <Image src="" layout="fill"/> */}
                      <span>
                        Skin Care{" "}
                        <i className="fa fa-angle-down hidden-sm hidden-xs"></i>
                      </span>
                      <i className="fa fa-plus hidden-md hidden-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      {/* <Image src=""/> */}
                      <span>
                        Health &amp; Wellness{" "}
                        <i className="fa fa-angle-down hidden-sm hidden-xs"></i>
                      </span>
                      <i className="fa fa-plus hidden-md hidden-lg"></i>
                    </a>
                    <ul>
                      <li>
                        <a>Protein</a>
                      </li>
                      <li>
                        <a>Wellness Shake </a>
                      </li>
                      <li>
                        <a>Energy Drink </a>
                      </li>
                      <li>
                        <a>Vitamin Supplements</a>
                      </li>
                      <li>
                        <a>FMCG Combo</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
