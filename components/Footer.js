import React from "react";
import Head from 'next/head'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Image from next
import Image from "next/image";
function Footer() {
  return (
      <>
     
    <div>
      <section className="footer1">
        <div className="container">
          <div className="row ">
            <div className="col-md-2">
              <div className="footer1-box">
                <h3>LIVFITT</h3>
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer1-box">
                <h3>BRANDS</h3>
                <ul>
                  <li>
                    <a>Brand1</a>
                  </li>
                  <li>
                    <a>Brand2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer1-box">
                <h3>POLICY INFO</h3>
                <ul>
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                  <li>
                    <a>Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer1-box">
                <h3>NEED HELP</h3>
                <ul>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" >
              <div className="footer1-box">
                <h3>TOP CATEGORIES</h3>
                <ul style={{columnCount : 2}}>
                  <li>
                    <a>Protein   </a>
                  </li>
                  <li>
                    <a>Pre-workout </a>
                  </li>
                  <li>
                    <a>Post-workout </a>
                  </li>

                  <li>
                    <a>Fat burners </a>
                  </li>
                  <li>
                    <a>Vitamins </a>
                  </li>
                  <li>
                    <a>Apparel and Accessories </a>
                  </li>
                  <li>
                    <a>Equipments  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer2">
    <div className="container">
        <div className="row ">
            <div className="col-md-6">
                <div className="footer2-box " style={{textAlign:"left"}}>
                    <span className="payment">PAYMENT</span>
                    <Image src="https://cosmetikaa.com/images/payment.jpg" layout="fill"/>
                </div>
            </div>
            {/* <div className="col-md-3">
                <div className="footer2-box " style={{textAlign:"left"}}>
                    <span className="payment">PAYMENT</span>
                    <Image src="https://cosmetikaa.com/images/payment.jpg" layout="fill"/>
                </div>
            </div> */}
            <div className="col-md-6">
                <div className="footer2-box">
                    <span>CONNECT</span>
                    <ul>
                        <li><a><  InstagramIcon style={{fontSize:"27px"}}/></a></li>
                        <li><a>< FacebookIcon style={{fontSize:"27px"}}/></a></li>
                      
                        <li><a ><  LinkedInIcon style={{fontSize:"27px"}}/></a></li>
                     
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <section className="footer-img">
    <img  className="width" src="https://cosmetikaa.com/images/footer.png" />
</section>   */}
    </div>
    </>
  );
}

export default Footer;
