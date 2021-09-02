import React from "react";
import vsLogo from "../../src/images/vivasoft.png";

const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              <span className="company_name">
                <img src={vsLogo} alt="vivasoft_logo" className="image-fluid" />
              </span>
              <br />
              <span className="address">
                H#385, R#06 <br /> Mirpur Dohs, Dhaka-1216, Dhaka.
              </span>
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
      <div className="container-fluid">
        <p className="text-center tax_title">
          Employee tax yearly statement for tax year - 2021 (2020-2021)
        </p>
      </div>
    </>
  );
};

export default Header;
