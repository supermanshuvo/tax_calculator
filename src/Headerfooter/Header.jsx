import React from "react";
import vsLogo from "../../src/images/vivasoft.png";

const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-1">
            <img src={vsLogo} alt="vivasoft_logo" className="image-fluid" />
          </div>
          <div className="col-11">
            <p className="text-center">
              <span className="company_name">VivaSoft Limited</span> <br />
              H#385, R#06, Mirpur Dohs, Dhaka-1216 <br />
              Dhaka
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-center tax_title">
          Employee tax yearly statement for tax year - 2021 (2020-2021)
        </p>
      </div>
    </>
  );
};

export default Header;
