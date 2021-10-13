import React, { useState } from 'react'

function ProductDescription() {
    const [text, setText] = useState("Read More");
    const [height, setHeight] = useState(true);
    const [specification, setSpecification] = useState(true);
    const [more, setMore] = useState(true);
    const readHeight = (e) => {
        let x = e.target.previousSibling;
        if (height) {
          x.style.height = "100%";
          setHeight(!height);
          setText("Read Less");
        } else {
          x.style.height = "100px";
          setHeight(!height);
          setText("Read More");
        }
       console.log(x);
      };
      let openMore = (e) => {
        // alert("hi")
    var currentHeight=document.querySelector(".product-detail-product-description-container-box1").style.height;
    // alert(currentHeight)
    if (currentHeight=="100%"){
      setText("Read More")
    }else{
      setText("Read Less")
    }
        let v1 = document.querySelector(".open-howuse-box");
        v1.classList.add("active");
        let r1 = document.querySelector(".open-ingredient-box");
        let r2 = document.querySelector(".open-description-box");
        r1.classList.remove("active");
        r2.classList.remove("active");
        let v2 = document.querySelector(".howuse-box");
        v2.style.display = "block";
        let d1 = document.querySelector(".ingredient-box");
        let d2 = document.querySelector(".description-box");
        d1.style.display = "none";
        d2.style.display = "none";
      };
      let openDescription = (e) => {
        // alert("hi")
        var currentHeight=document.querySelector(".product-detail-product-description-container-box1").style.height;
        // alert(currentHeight)
        if (currentHeight=="100%"){
          setText("Read More")
        }else{
          setText("Read Less")
        }
        let click = document.querySelector(".open-description-box");
        let click2 = document.querySelector(".description-box");
        let box1 = document.querySelector(".open-ingredient-box");
        let box2 = document.querySelector(".open-howuse-box");
        let desc1 = document.querySelector(".ingredient-box");
        let desc2 = document.querySelector(".howuse-box");
        click.classList.add("active");
        box1.classList.remove("active");
        box2.classList.remove("active");
    
        click2.style.display = "block";
        desc1.style.display = "none";
        desc2.style.display = "none";
      };
    
      let openIngredient = (e) => {
        var currentHeight=document.querySelector(".product-detail-product-description-container-box1").style.height;
    // alert(currentHeight)
    if (currentHeight=="100%"){
      setText("Read More")
    }else{
      setText("Read Less")
    }
        // alert("hi")
        let click = document.querySelector(".open-ingredient-box");
        click.classList.add("active");
        let click2 = document.querySelector(".ingredient-box");
        click2.style.display = "block";
        let box1 = document.querySelector(".open-description-box");
        let box2 = document.querySelector(".open-howuse-box");
        box1.classList.remove("active");
        box2.classList.remove("active");
        let desc1 = document.querySelector(".description-box");
        let desc2 = document.querySelector(".howuse-box");
    
        desc1.style.display = "none";
        desc2.style.display = "none";
      };
    return (
        <div className="product-detail-product-description-container">
        <ul className="product-detail-product-description-container-tabs">
          <li
            className="active open-description-box"
            onClick={openDescription}
          >
            DESCRIPTION
          </li>
          <li className="open-ingredient-box" onClick={openIngredient}>
            SPECIFICATIONS
          </li>
          <li className="open-howuse-box" onClick={openMore}>
            MORE
          </li>
        </ul>
        <div className="product-detail-product-description-container-box description-box">
          <div className="product-detail-product-description-container-box1">
            <p></p>
            <p>
              A foaming creamy cleanser that gently cleanses your skin
              and removes impurities. Leaves your skin softened with a
              silky smooth after-feel and fresh floral fragrance.
              A foaming creamy cleanser that gently cleanses your skin
              and removes impurities. Leaves your skin softened with a
              silky smooth after-feel and fresh floral fragrance.
              A foaming creamy cleanser that gently cleanses your skin
              and removes impurities. Leaves your skin softened with a
              silky smooth after-feel and fresh floral fragrance.
            </p>
            <p></p>
          </div>
          <div
            className="product-detail-product-description-container-box-show-more"
            onClick={readHeight}
          >
            {text} <i className="fa fa-angle-down"></i>
          </div>
        </div>

        <div className="product-detail-product-description-container-box ingredient-box">
          <div className="product-detail-product-description-container-box1">
            <p>
              <b>Key Features</b>
            </p>
            <ul>
              <li></li>
            </ul>
            <p>
              <b>General</b>
            </p>
            <table className="product-detail-table">
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Model Name</td>
                  <td>
                    Oriflame Optimals Clear White Lightening Cleansing
                    Foam-150ml
                  </td>
                </tr>
                {/* <!--<tr><td>Quantity</td><td>1</td></tr>--> */}
                <tr>
                  <td>Best Before</td>
                  <td>36 Months</td>
                </tr>
                <tr>
                  <td>Pack of</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Suitable for</td>
                  <td>Skin brightning</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Cleanser</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="product-detail-product-description-container-box-show-more"
            onClick={readHeight}
          >
            {text} <i className="fa fa-angle-down"></i>
          </div>
        </div>

        <div className="product-detail-product-description-container-box howuse-box">
          <div
            className="product-detail-product-description-container-box1"
            // onClick={setHeight}
          >
            <table className="product-detail-table">
              <tbody>
                <tr>
                  <td>Manufacturer</td>
                  <td>Oriflame India Private Limited</td>
                </tr>
                <tr>
                  <td>Mfd Date</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Country of Origin</td>
                  <td>India</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="product-detail-product-description-container-box-show-more"
            onClick={readHeight}
          >
            {text} <i className="fa fa-angle-down"></i>
          </div>
        </div>
      </div>
    )
}

export default ProductDescription
