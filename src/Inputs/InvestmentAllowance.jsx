import React from "react";

const InvestmentAllowance = () => {
  return (
    <>
      <div className="container">
        <p className="All_Headings">Investment Allowance & Tax Rebate</p>
        <form action="">
          <div className="row">
            <div className="col-12 mx-auto">
              {/* 1st input */}
              <div className="row">
                <div className="col-4  ">
                  <label>Contribution to Provident Fund</label>
                </div>
                <div className="col-8 mx-0">
                  <input
                    type="number"
                    defaultValue={0}
                    className="inpOfInvestmentAllowance"
                  />
                </div>
              </div>
              {/* 2nd input */}
              <div className="row">
                <div className="col-4">
                  <label>DPS/BSP/LIP/Others (If Applicable) </label>
                </div>
                <div className="col-8">
                  <div className="">
                    <input
                      type="number"
                      defaultValue={0}
                      className="inpOfInvestmentAllowance"
                    />
                  </div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="row">
                <div className="col-4">
                  <label>Total Investment</label>
                </div>
                <div className="col-8">
                  <div className="">
                    <p>0{/* set total defaultValue insted of 0 */}</p>
                  </div>
                </div>
              </div>

              {/* <label>Total Investment</label>
               */}

              {/* 4th item */}
              <div className="">
                <div className="row">
                  <div className="col-4">
                    <label>Allowed Investment </label>
                  </div>
                  <div className="col-8 d-flex justify-content-end ">
                    <pre>40,750 From 15,000,000</pre>
                    {/* dummy defaultValues inside p */}
                  </div>
                </div>
              </div>

              {/* 5th item */}
              <div className="row">
                <div className="col-4">
                  <label>Less Rebate on Investment Tk. </label>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                      <p>40, 750</p> <p>40, 750</p>
                    </div>
                  </div>
                  {/* dummy defaultValues inside p */}
                </div>
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
                <div className="col-8 mx-0 d-flex justify-content-end">
                  <p>40,750</p>
                  {/* dummy defaultValues inside p */}
                </div>
              </div>

              {/* div for  Provision Per Month (12)  Months */}
              <div className="row">
                <div className="col-4">
                  <label> Provision Per Month (12) Months </label>
                </div>
                <div className="col-8 mx-0 d-flex justify-content-end">
                  <p>40,750</p>
                  {/* dummy defaultValues inside p */}
                </div>
              </div>

              {/*in next line "col-9 mx-auto" div will have been ended */}
            </div>
            {/*in next line row "div" will have been ended */}
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn">Print</button>
          </div>
        </form>
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
};

export default InvestmentAllowance;
