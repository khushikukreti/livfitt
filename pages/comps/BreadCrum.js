import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function BreadCrum() {
  return (
    <div style={{backgroundColor:"#FFF"}}>
      <section className="listing-bredcrumb" style={{paddingTop:"15px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb" style={{backgroundColor:"transparent", marginBottom:"0px"}}>
                <li>
                  <a href="index.php" style={{color:"black"}}>Home</a>
                </li>
                <li>
                    <KeyboardArrowRightIcon style={{fontSize:"21px", verticalAlign:"top", color:"black"}}></KeyboardArrowRightIcon>
                  <a href="category.php?category=hair-care-styling" style={{color:"black"}}>Whey</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BreadCrum;
