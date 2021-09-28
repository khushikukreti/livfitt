import React from "react";
import Head from 'next/head'
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
                <h3>COSMETIKAA</h3>
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
                <h3>COSMETIKAA USERS</h3>
                <ul>
                  <li>
                    <a>My Cart</a>
                  </li>
                  <li>
                    <a>My Wishlist</a>
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
            <div className="col-md-4" style={{columnCount : 2}}>
              <div className="footer1-box">
                <h3>TOP CATEGORIES</h3>
                <ul>
                  <li>
                    <a>Hair Care &amp; Styling </a>
                  </li>
                  <li>
                    <a>Bath &amp; Body Care </a>
                  </li>
                  <li>
                    <a>Makeup </a>
                  </li>

                  <li>
                    <a>Fragnances </a>
                  </li>
                  <li>
                    <a>Feminine Hygiene </a>
                  </li>
                  <li>
                    <a>Skin Care </a>
                  </li>
                  <li>
                    <a>Health &amp; Wellness </a>
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
            <div className="col-md-6">
                <div className="footer2-box">
                    <span>CONNECT</span>
                    <ul>
                        <li><a h><i className="fa fa-facebook-f"></i></a></li>
                      
                        <li><a ><i className="fa fa-instagram"></i></a></li>
                     
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
