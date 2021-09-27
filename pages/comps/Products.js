import React from "react";

function Products({ pname }) {
  return (
    <div>
      <section className="brands-for-you">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-img">
                <div className="h1">{`${pname}`}</div>
              </div>
            </div>

          

          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
