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
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings2 = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  var settings3 = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var settings4 = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      
        <Slider {...settings}>
          <BannerSlide imgURL="https://cosmetikaa.com/manager/images/slide-images/200521103147_desktopslide.jpg"></BannerSlide>
          <BannerSlide imgURL="https://cosmetikaa.com/manager/images/slide-images/200521103147_desktopslide.jpg"></BannerSlide>
          <BannerSlide imgURL="https://cosmetikaa.com/manager/images/slide-images/200521103147_desktopslide.jpg"></BannerSlide>

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

      <section className="daily-essential11">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-img">
                <div className="h1">SHOP BY CATEGORY</div>
                <div className="col-md-12 ">
                  <div className="row">
                    <div className="col-md-4">
                      <DailyEssential imgURL="https://cosmetikaa.com/manager/images/category-banner-images/01072021124046_category.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="https://cosmetikaa.com/manager/images/category-banner-images/21042021052546_category.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="https://cosmetikaa.com/manager/images/category-banner-images/01072021124000_category.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="https://cosmetikaa.com/manager/images/category-banner-images/21042021052654_category.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="https://cosmetikaa.com/manager/images/category-banner-images/01072021124046_category.jpg"></DailyEssential>
                    </div>
                    <div className="col-md-4">
                      <DailyEssential imgURL="https://cosmetikaa.com/manager/images/category-banner-images/21042021052546_category.jpg"></DailyEssential>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="daily-essential11">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-img">
                <div className="h1">TOP COLLECTION</div>
                <div className="col-md-12 ">
                  <Slider {...settings3}>
                    <DailyEssential imgURL="https://cosmetikaa.com/manager/images/collection-banner-images/240521113927_collection.jpg"></DailyEssential>
                    <DailyEssential imgURL="https://cosmetikaa.com/manager/images/collection-banner-images/150521093133_collection.jpg"></DailyEssential>
                    <DailyEssential imgURL="https://cosmetikaa.com/manager/images/collection-banner-images/150521093146_collection.jpg"></DailyEssential>
                    <DailyEssential imgURL="https://cosmetikaa.com/manager/images/collection-banner-images/150521092925_collection.jpg"></DailyEssential>
                    <DailyEssential imgURL="https://cosmetikaa.com/manager/images/collection-banner-images/23052021055309_collection.jpg"></DailyEssential>
                    <DailyEssential imgURL="https://cosmetikaa.com/manager/images/collection-banner-images/150521093133_collection.jpg"></DailyEssential>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner imgURL="https://cdn.shopify.com/s/files/1/0291/3743/6771/files/athlete-banner-july-2021A.jpg?v=1632119398"></Banner>
      {/* <Banner imgURL="https://cosmetikaa.com/manager/images/slide-images/050721104136_desktopslide.jpg"></Banner> */}
      {/* <Banner imgURL="https://cosmetikaa.com/manager/images/slide-images/010721123111_desktopslide.jpg"></Banner> */}
      <Products pname="FEMININE HYGINEE"></Products>
      <div className="col-md-12 ">
        <Slider {...settings4}>
          <Feminine
            pname="Whisper Ultra Night Sanitary Pads for Women, XXXL 10 Napki..."
            imgURL="https://cosmetikaa.com/manager/images/product-images/front/whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins_1.jpg"
            pprice="243"
          ></Feminine>
          <Feminine
            pname="Whisper Ultra Clean Sanitary Pads for Women, XL+ 50 Napkin..."
            imgURL="https://cosmetikaa.com/manager/images/product-images/front/whisper-ultra-clean-sanitary-pads-for-women-xl-50-napkins_1.jpg"
            pprice="499"
          />
          <Feminine
            pname="Whisper Ultra Night Sanitary Pads for Women, XXXL 10 Napki..."
            imgURL="https://cosmetikaa.com/manager/images/product-images/front/whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins_1.jpg"
            pprice="243"
          ></Feminine>
          <Feminine
            pname="Whisper Ultra Soft Sanitary Pads for Women, XL 50 Napkins"
            imgURL="https://cosmetikaa.com/manager/images/product-images/front/whisper-ultra-soft-sanitary-pads-for-women-xl-50-napkins_1.jpg"
            pprice="398"
          />
          <Feminine
            pname="Whisper Ultra Night Sanitary Pads for Women, XXXL 10 Napki..."
            imgURL="https://cosmetikaa.com/manager/images/product-images/front/whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins_1.jpg"
            pprice="243"
          ></Feminine>
          <Feminine
            pname="Whisper Ultra Night Sanitary Pads for Women, XXXL 10 Napki..."
            imgURL="https://cosmetikaa.com/manager/images/product-images/front/whisper-ultra-night-sanitary-pads-for-women-xxxl-10-napkins_1.jpg"
            pprice="243"
          />
        </Slider>
      </div>
      <Banner imgURL="https://cosmetikaa.com/manager/images/slide-images/230421091035_desktopslide.jpg"></Banner>
      <Products pname="TODAY DEAL"></Products>
      <div className="col-md-12 ">
        <Slider {...settings4}>
          <TodayDeal
            pname="Extra 10% off L'Oréal Professionnel Serie Exper..."
            imgURL="https://cosmetikaa.com/manager/images/deal-images/22-May-2021-11-34-48_Deal.jpg"
          />
          <TodayDeal
            pname="15 % Off Wella Professional "
            imgURL="https://cosmetikaa.com/manager/images/deal-images/22-May-2021-11-25-36_Deal.jpg"
          />
          <TodayDeal
            pname="UPTO 35% OFF Herbalife Product"
            imgURL="https://cosmetikaa.com/manager/images/deal-images/22-May-2021-07-57-49_Deal.jpg"
          />
          <TodayDeal
            pname="Extra 20% off Schwarzkopf Professional"
            imgURL="https://cosmetikaa.com/manager/images/deal-images/22-May-2021-11-32-29_Deal.jpg"
          />
          <TodayDeal
            pname="Extra 10% off L'Oréal Professionnel Serie Exper..."
            imgURL="https://cosmetikaa.com/manager/images/deal-images/22-May-2021-11-34-48_Deal.jpg"
          />
          <TodayDeal
            pname="15 % Off Wella Professional "
            imgURL="https://cosmetikaa.com/manager/images/deal-images/22-May-2021-11-25-36_Deal.jpg"
          />
        </Slider>
      </div>
      <section className="fourth-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <div className="fourth-seca">
                    <Image src="https://cosmetikaa.com/images/4.png" layout="fill"/>
                    <h3>100% Secure Payment</h3>
                    <p>All major credit &amp; debit cards accepted.</p>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div className="fourth-seca">
                      <Image src="https://cosmetikaa.com/images/5.png" layout="fill" />
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
                      <Image src="https://cosmetikaa.com/images/6.png" layout="fill"/>
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

      <Products pname="TOP SELLING BRANDS" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <Slider {...settings4}>
              <TopBrands imgURL="https://cosmetikaa.com/manager/images/brand-images/050820125114_brand.jpg" />
              <TopBrands imgURL="https://cosmetikaa.com/manager/images/brand-images/080621124445_brand.jpg" />
              <TopBrands imgURL="https://cosmetikaa.com/manager/images/brand-images/040521080445_brand.jpg" />
              <TopBrands imgURL="https://cosmetikaa.com/manager/images/brand-images/080621124431_brand.jpg" />
              <TopBrands imgURL="https://cosmetikaa.com/manager/images/brand-images/040521080515_brand.jpg" />
              <TopBrands imgURL="https://cosmetikaa.com/manager/images/brand-images/020721075935_brand.jpg" />
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
                <p>We really want you to want US!!</p>
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

      <Products pnmae="OUR BRANDS"> </Products>
      <div className="col-md-12 ">
        <div className="center">
          <Slider {...settings2}>
          <Brands imgURL="/labrand.png"></Brands>
            <Brands imgURL="/one.png"></Brands>
            <Brands imgURL="/BM.png"></Brands>
            <Brands imgURL="/dym.png"></Brands>
            <Brands imgURL="/myprotien.png"></Brands>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
