import React from "react";

const InvestmentAllowance = () => {
  return (
    <>
      <div className="container-fluid">
        <p className="All_Headings">Investment Allowance & Tax Rebate</p>
        <form action="">
          <div className="row">
            <div className="col-9 mx-auto">
              {/* 1st input */}
              <div className="row">
                <div className="col-4">
                  <label>Contribution to Provident Fund</label>
                </div>
                <div className="col-8 mx-0">
                  <input type="number" defaultValue={0} />
                </div>
              </div>
              {/* 2nd input */}
              <div className="">
                <label>DPS/BSP/LIP/Others (If Applicable) </label>
                <input type="number" defaultValue={0} />
              </div>
              {/* 3rd item */}
              <div className="d-flex d-inline-block">
                <label>Total Investment</label>
                <p>0{/* set total defaultValue insted of 0 */}</p>
              </div>
              {/* 4th item */}
              <div className="d-flex d-inline-block">
                <label>Allowed Investment </label>
                <p>40,750 From 15,000,000</p>
                {/* dummy defaultValues inside p */}
              </div>

              {/* 5th item */}
              <div className="d-flex d-inline-block">
                <label>Less Rebate on Investment Tk. </label>
                <p>40,750</p>
                <p>40,750</p>
                {/* dummy defaultValues inside p */}
              </div>

              {/* div for horizontal line */}
              <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                  <hr />
                </div>
              </div>

              {/* div for Net Income Tax Payable	 */}
              <div className="row">
                <div className="col-4">
                  <label> Net Income Tax Payable</label>
                </div>
                <div className="col-8 mx-0">
                  <p>40,750</p>
                  {/* dummy defaultValues inside p */}
                </div>
              </div>

              {/* div for  Provision Per Month (12)  Months */}
              <div className="row">
                <div className="col-4">
                  <label> Provision Per Month (12) Months </label>
                </div>
                <div className="col-8 mx-0">
                  <p>40,750</p>
                  {/* dummy defaultValues inside p */}
                </div>
              </div>

              {/*in next line "col-9 mx-auto" div will have been ended */}
            </div>
            {/*in next line row "div" will have been ended */}
          </div>
        </form>
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
};

export default InvestmentAllowance;
