import React from "react";

const Header = () => {
  return (
    <>
      <div className="Header-bg">
        <div className="Header-bg-style">
          <div className="container">
            <div className="row ">
              <div className="col-md-12 my-auto col-sm-12 text-center">
                <div>
                  {/* <h3 className="h3_sub_heading">TAX CALCULATOR</h3> */}
                  <h2 className="ct text-center">TAX CALCULATOR</h2>

                  <p className="bt">Calculate Your Tax Very Easily</p>
                </div>
                {/* 
            <div className="d-flex justify-content-left align-items-left">
              <button className="exlpore_btn">
                <a href="#nav_id">Explore</a>
              </button>
            </div> */}
              </div>
              {/* <div className="col-md-6 col-sm">
            <div className="d-flex hero_image justify-content-center align-items-center">
              <img src={hero} alt="Happy-Man" className="img-fluid" />
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
