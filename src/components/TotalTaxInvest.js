// import { useState } from "react";

const TotalTaxInvest = (props) => {
  /* let AllowInvestment = props.AllowInvestment,
      totalTaxIncome = props.TotalTaxIncome;
    let [lessRebate, setLessRebate] = useState(0),
      totalMonth = props.ProvMonth;
    let totalPayableTax = props.TotalPayableTax,
      ProvisionMonthTax = parseInt(AllowInvestment / totalMonth);
    let result =
      totalPayableTax - lessRebate < 0
        ? 5000
        : totalPayableTax - lessRebate < 5000
        ? 5000
        : totalPayableTax - lessRebate;
    let NetIncomeTaxPayable = result;
    (() => {
      let LessRebateResult = 0;
      setLessRebate(LessRebateResult);
    })();
    console.log(totalTaxIncome); */
  /* 
    E42 = AllowInvestment
    H20 = totalTaxIncome
    configure.C44 = 
    Configure.C45 =
    Configure.C46 =
    Configure.C49 =
    Configure.C50 =
    Configure.H44 =
    Configure.H46 =
    Configure.H47 =
    Configure.H49 =
    Configure.H50 =
    Configure.H51 =
    
    
    */
  return (
    <>
      <div className="sector">
        <div className="row">
          <h3>
            {props.AllowInvestment}: {props.lessRebate} :{" "}
            {props.NetIncomeTaxPayable}:{props.ProvisionMonthTax}{" "}
          </h3>
          {/* <h5 className="bg-secondary fw-light p-2 text-center">
            Total Calculation
          </h5> */}
          <p className="All_Headings">Total Calculation</p>
          <div className="container-fluid">
            <table className="table">
              <tbody>
                <tr>
                  <td>Less Rebate on Investment Tk.</td>
                  <td>{props.AllowInvestment}</td>
                  <td>{props.lessRebate}</td>
                </tr>
                <tr>
                  <td colSpan="2">Net Income Tax Payable</td>
                  <td>{props.NetIncomeTaxPayable}</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    Provision Per Month {props.totalMonth} Months
                  </td>
                  <td>{props.ProvisionMonthTax}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalTaxInvest;
