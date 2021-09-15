import React from "react";
import hero from "../../src/images/divi.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header-bg-style">
        <div className="container">
          <h2 className="text-white title_name">TAX CALCULATOR</h2>
          <div className="row ">
            <div className="col-6 my-auto">
              <div>
                <h2 className="ct">Calculate Your Tax Very Easily</h2>

                <p className="bt">
                  Here You can calculate your yearly tax very easily.So just
                  checkout this website.
                </p>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <button className="exlpore_btn">
                  <a href="#nav_id">Explore</a>
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-center align-items-center">
                <img src={hero} alt="Happy-Man" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
