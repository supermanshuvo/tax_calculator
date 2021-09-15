import React from "react";
import hero from "../../src/images/divi.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
  
    <div className="Header-bg-style">
      <div className="container" >
        <div className="row ">
          <div className="col-6 my-auto">
            <div >
              
                <h2 className="ct">Calculate Your Tax Very Easily</h2> 
                
              
              <p className="bt" >
                  here u can calculate ur yearly tax very easily.so just checkout this website</p>
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
   
  );
};

export default Header;
