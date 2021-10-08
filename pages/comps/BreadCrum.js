import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function BreadCrum() {
  return (
    <div>
      <section class="listing-bredcrumb" style={{paddingTop:"15px"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class="breadcrumb" style={{backgroundColor:"transparent", marginBottom:"0px"}}>
                <li>
                  <a href="index.php" style={{color:"white"}}>Home</a>
                </li>
                <li>
                    <KeyboardArrowRightIcon style={{fontSize:"21px", verticalAlign:"top"}}></KeyboardArrowRightIcon>
                  <a href="category.php?category=hair-care-styling" style={{color:"white"}}>Whey</a>
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
