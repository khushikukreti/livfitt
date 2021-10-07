import React from "react";
import Slider from "react-slick";
import Banner from "./comps/Banner";
import Brands from "./comps/Brands";
import DailyEssential from "./comps/DailyEssential";
import Feminine from "./comps/Feminine";
import Products from "./comps/Products";
import TodayDeal from "./comps/TodayDeal";
import TopBrands from "./comps/TopBrands";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlide from "./comps/BannerSlide";
import TopCollection from "./TopCollection";
import Bannerr from "./comps/bannerr";
// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
function Homepage() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   
  };
  var settings2 = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  var settings3 = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  var settings4 = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      
        <Slider {...settings}>
          <Bannerr imgURL="/banner.jpg"></Bannerr>
          <Bannerr imgURL="/banner.jpg"></Bannerr>
          <Bannerr imgURL="/banner.jpg"></Bannerr>

        </Slider>
      
      {/* <div className="banner-slide">
      <Slider {...settings}>
        <div className="item  background_bg">
          <div className="home-banner1">
            
              <Image
                src="https://cosmetikaa.com/manager/images/slide-images/200521103147_desktopslide.jpg"
                alt="Herbalife"
                layout="fill"
              ></Image>
            
          </div>
        </div>
        <div className="item  background_bg">
          <div className="home-banner1">
            
              <Image
                src="https://cosmetikaa.com/manager/images/slide-images/200521055555_desktopslide.jpg"
                alt="Herbalife"
                layout="fill"
              ></Image>
            
          </div>
        </div>
        <div className="item  background_bg">
          <div className="home-banner1">
            
              <Image
                src="https://cosmetikaa.com/manager/images/slide-images/180521082748_desktopslide.jpg"
                alt="Herbalife"
                layout="fill"
              ></Image>
            
          </div>
        </div>
        <div className="item  background_bg">
          <div className="home-banner1">
            
              <Image
                src="https://cosmetikaa.com/manager/images/slide-images/300121070117_desktopslide.jpg"
                alt="Herbalife"
                layout="fill"
              ></Image>
            
          </div>
        </div>
      </Slider>
      </div> */}
      {/* <div className="item  background_bg">
        <div className="home-banner1">
          <a >
            <img
              src="https://cosmetikaa.com/manager/images/slide-images/200521103147_desktopslide.jpg"
              alt="Herbalife"
              width={"100%"}
            />
          </a>
        </div>
      </div> */}

      {/* <section className="home-second-banner first-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-second-banner1 effect-layla">
                <a href="listing.php?category=health-wellness">
                  <img src="https://cosmetikaa.com/manager/images/slide-images/200521055637_desktopslide.jpg" />
                  <figcaption></figcaption>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="daily-essential11" style={{ marginBottom: "25px",}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-img">
                <div className="h1">SHOP BY CATEGORY</div>
                <div className="col-md-12 ">
                  <div className="row">
                     <div className="col-md-4">
                      <DailyEssential imgURL="/protien.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="/preworkout.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="/postworkout.jpg"></DailyEssential>
                    </div>
                   
                    <div className="col-md-4">
                      <DailyEssential imgURL="/fatburnner.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="/vitamin1.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="/app.jpg"></DailyEssential>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="daily-essential11 whitebg" style={{paddingBottom:"9px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-img">
                <div className="h1">TOP SELLiNG </div>
                <div className="col-md-12  "
                //  style={{marginBottom:"30px"}}
                 >
                  <div className="padd">
                  <Slider {...settings3}>
                    <Feminine imgURL="/product1.jpg" pname="Gainer Collection" pprice={489}/>
                    <Feminine imgURL="/product2.jpg" pname="Gainer Collection" pprice={489}/>
                    <Feminine imgURL="/product3.jpg" pname="Gainer Collection" pprice={489}/>
                    <Feminine imgURL="/product4.jpg" pname="Gainer Collection" pprice={489}/>
                    <Feminine imgURL="/product5.jpg" pname="Gainer Collection" pprice={489}/>
                    <Feminine imgURL="/product1.jpg" pname="Gainer Collection" pprice={489}/>
                  </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <Banner imgURL="/bannerPage.jpg"></Banner>
      {/* <Banner imgURL="https://cosmetikaa.com/manager/images/slide-images/050721104136_desktopslide.jpg"></Banner> */}
      {/* <Banner imgURL="https://cosmetikaa.com/manager/images/slide-images/010721123111_desktopslide.jpg"></Banner> */}
      <Products pname="TRENDiNG"></Products>
     <div className="container">
       <div className="row">
      <div className="col-md-12 ">
        <Slider {...settings4}>
          <Feminine
            pname="product detail intwo lines"
            imgURL="/product1.jpg"
            pprice="243"
          ></Feminine>
          <Feminine
            pname="product detail intwo lines"
            imgURL="/product1.jpg"
            pprice="499"
          />
          <Feminine
            pname="product detail intwo lines"
            imgURL="/product1.jpg"
            pprice="243"
          ></Feminine>
          <Feminine
            pname="product detail intwo lines"
            imgURL="/product1.jpg"
            pprice="398"
          />
          <Feminine
            pname="product detail intwo lines"
            imgURL="/product1.jpg"
            pprice="243"
          ></Feminine>
          <Feminine
            pname="product detail intwo lines"
            imgURL="/product1.jpg"
            pprice="243"
          />
        </Slider>
      </div>
      </div>
      </div>
      {/* <Banner style={{background:"transparent"}} imgURL="https://cosmetikaa.com/manager/images/slide-images/230421091035_desktopslide.jpg"></Banner> */}
      <div className="col-md-12" style={{marginTop:"-30px"}}>
      <Products pname="TOP COLLECTiON"></Products>
      </div>
      <div className="container">
      <div className="row">
      <div className="col-md-12 ">
        <Slider {...settings4}>
          <Feminine
            pname="Product detail"
            imgURL="/image.jpg"
            pprice={234}
          />
          <Feminine
            pname="Product detail "
            imgURL="/image.jpg"
            pprice={234}
          />
          <Feminine
            pname="Product detail"
            imgURL="/image.jpg"
            pprice={234}
          />
          <Feminine
            pname="Product detail"
            imgURL="/image.jpg"
            pprice={234}
          />
          <Feminine
            pname="Product detail"
            imgURL="/image.jpg"
            pprice={234}
          />
          <Feminine
            pname="Product detail "
            imgURL="/image.jpg"
            pprice={234}
          />
        </Slider>
      </div>
      </div>
      </div>
      <section className="section">
        <Banner imgURL="/Banner2.jpg"></Banner>
      </section>
      <section className="fourth-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <div className="fourth-seca">
                    <Image src="/4.png" layout="fill"/>
                    <h3>100% Secure Payment</h3>
                    <p>All major credit &amp; debit cards accepted.</p>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div className="fourth-seca">
                      <Image src="/5.png" layout="fill" />
                      <h3>GENUINE PRODUCTS</h3>
                      <p>
                        Tell me what you are looking for and i will work my
                        magic to help you find your perfect match.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div className="fourth-seca">
                      <Image src="/6.png" layout="fill"/>
                      <h3>PAN INDIA DELIVERY</h3>
                      <p>
                        Got a question? Look no further. Browse FAQs or submit
                        your query.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Products pname="RECENTLY LAUNCHED" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <Slider {...settings4}>
              <Feminine imgURL="/product1.jpg" pname="Product Change " ppricee={435}/>
              <Feminine imgURL="/product1.jpg" pname="Product Change " ppricee={435}/>
              <Feminine imgURL="/product1.jpg" pname="Product Change " ppricee={435}/>
              <Feminine imgURL="/product1.jpg" pname="Product Change " ppricee={435}/>
              <Feminine imgURL="/product1.jpg" pname="Product Change " ppricee={435}/>
              <Feminine imgURL="/product1.jpg" pname="Product Change " ppricee={435}/>
              
            </Slider>
          </div>
        </div>
      </div>

      <section className="fifth-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="fifth-seca">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="none"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    d="M0.364,0.375 8.715,8.726 16.716,0.726 24.716,8.726 32.439,1.005 40.16,8.726 48.161,0.726 55.998,8.563 "
                  ></path>
                </svg>
                <h2>
                  Visitors can easily <br />
                  subscribe.
                </h2>
                {/* <p>We really want you to want US!!</p> */}
                <div className="fifth-secb">
                  <input
                    type="email"
                    name="subscribe_email"
                    className="subscribe_email"
                    placeholder="Your Email Address"
                  />
                  <button className="subscribe_btn ">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="lastsec">
      <Products pname="OUR BRANDS"> </Products>
      <div className="container">
      <div className="row">
      <div className="col-md-12 ">
        <div className="center row">
          <Slider {...settings2}>
          <Brands imgURL="/labrand.png"></Brands>
            <Brands imgURL="/one.png"></Brands>
            <Brands imgURL="/BM.png"></Brands>
            <Brands imgURL="/dym.png"></Brands>
            <Brands imgURL="/myprotien.png"></Brands>
          <Brands imgURL="/labrand.png"></Brands>
          <Brands imgURL="/dym.png"></Brands>
          <Brands imgURL="/labrand.png"></Brands>
            <Brands imgURL="/one.png"></Brands>
            <Brands imgURL="/BM.png"></Brands>
            <Brands imgURL="/dym.png"></Brands>
            <Brands imgURL="/myprotien.png"></Brands>
          <Brands imgURL="/labrand.png"></Brands>
          <Brands imgURL="/dym.png"></Brands>

          </Slider>
        </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  );
}

export default Homepage;
