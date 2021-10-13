import { useEffect, useState, useRef } from "react";
import { taxConfig } from ".././configData.js";

const InvestmentAllowance = ({
  reportPhase,
  title,
  active,
  setActive,
  provFund,
  totalTaxIncome,
  totalPayableTax,
  zone,
}) => {
  const [totalInvestMent, setTotalInvestMent] = useState(0);
  const [allowInvestment, setAllowInvestment] = useState(0);
  const [limitInvestment, setLimitInvestment] = useState(0);
  const [lessRebate, setLessRebate] = useState(0);
  const [netIncomeTaxPayable, setNetIncomeTaxPayable] = useState(0);
  const dpsField = useRef(0);
  const [lessRebateParents, setParents] = useState(0);
  const dpsInput = useRef(0)

  // let LessRebateFunc = (allowInvestment, totalTaxIncome) => {
  //   let result = 0;
  //   if (allowInvestment <= 0) {
  //     result = 0;
  //   } else if (totalTaxIncome <= taxConfig.config.configureC44) {
  //     result = allowInvestment * taxConfig.config.ConfigureH44 * 0.01;
  //   } else if (totalTaxIncome <= taxConfig.config.ConfigureC45) {
  //     if (allowInvestment - taxConfig.config.ConfigureC46 > 0) {
  //       result =
  //         taxConfig.config.ConfigureC46 * taxConfig.config.ConfigureH46 * 0.01 +
  //         (allowInvestment - taxConfig.config.ConfigureC46) *
  //           taxConfig.config.ConfigureH47 *
  //           0.01;
  //     } else {
  //       result = allowInvestment * taxConfig.config.ConfigureH46 * 0.01;
  //     }
  //   } else {
  //     result =
  //       taxConfig.config.ConfigureC49 * taxConfig.config.ConfigureH49 * 0.01 +
  //       taxConfig.config.ConfigureC50 * taxConfig.config.ConfigureH50 * 0.01 +
  //       (allowInvestment -
  //         (taxConfig.config.ConfigureC49 + taxConfig.config.ConfigureC50)) *
  //         taxConfig.config.ConfigureH51 *
  //         0.01;
  //   }

  //   return result;
  // };

  useEffect(() => {
    let minimumTax =
      zone === "cityCorporation"
        ? taxConfig.zone.cityCorporation
        : zone === "otherCity"
        ? taxConfig.zone.otherCity
        : taxConfig.zone.restCountry;

    if (
      totalTaxIncome * taxConfig.config.maxInvestTaxExemption * 0.01 <
      taxConfig.config.maxAllowedInvesment
    ) {
      setAllowInvestment(
        totalTaxIncome * taxConfig.config.maxInvestTaxExemption * 0.01
      );
    } else {
      setAllowInvestment(taxConfig.config.maxAllowedInvesment);
    }
    setTotalInvestMent(provFund + Number(dpsField.current.value));
    const lessRebateParentsvar = Math.min(allowInvestment, totalInvestMent);
    setParents(lessRebateParentsvar);
    setLimitInvestment(
      Math.max(
        totalTaxIncome * taxConfig.config.maxInvestTaxExemption * 0.01,
        taxConfig.config.maxAllowedInvesment
      )
    );
    //setLessRebate(LessRebateFunc(lessRebateParents, totalTaxIncome));
    setLessRebate(lessRebateParents * 0.15);
    let netIncomeTaxAmount = Math.max(minimumTax, totalPayableTax - lessRebate);
    if (totalPayableTax === 0) {
      netIncomeTaxAmount = 0;
    }
    setNetIncomeTaxPayable(netIncomeTaxAmount);
  }, [
    totalInvestMent,
    netIncomeTaxPayable,
    allowInvestment,
    lessRebate,
    totalPayableTax,
    limitInvestment,
    lessRebateParents,
    totalTaxIncome,
    zone,
    provFund,
  ]);

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
  });

  return (
    <>

    {/*<div className=" accordion_tab">
    //   <div
    //     className="accordion"
    //     onClick={() => {
    //       setActive(title);
    //       //console.log("accordion");
    //     }}
    //   >
    //     <p className="All_Headings">Total Calculation</p>
    //   </div>
    //      <div className={(active === title ? "show" : "") + " 
  accordionContent table-responsive "}>*/}

    {reportPhase === false &&(
      <div className="accordion-item">
      <h2 className="accordion-header"
        onClick={() => {
        if(title===active){
        setActive('')
        }
        else
        setActive(title)}}
       id="headingThree">
        <button
          className={"accordion-button "+ (title === active?'togolBtn':'')}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Total Calculation <span>{title !== active? 'Net Income Tax  : '+format.format(netIncomeTaxPayable) : ''}</span>
        </button>
      </h2>
      <div
        id="collapseThree"
        className={"accordion-collapse collapse "+(active === title ? "show" : "")}
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <table className="table table-hover table-bordered total_calc">
            <thead>
              <tr className="total_of_IncomeDetails">
                <th scope="col">Investment Allowance and Tax Rebate</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contribution to Provident Fund</td>
                <td className="text-center">{provFund}</td>
              </tr>
              <tr>
                <td>DPS/BSP/LIP/Others (If Applicable)</td>
                <td className="text-center table_form">
                  <input
                    type="number"
                    ref={dpsField}
                    placeholder="Waiting for input"
                    defaultValue={0}
                    onChange={(e) => {
                      //   let value = e.target.value===NaN?0:e.target.value;
                      //   let newTotal = parseInt(provFund*2)+parseInt(value)
                      //   setTotalInvestMent(newTotal)
                      let DPSOthers = e.target.value;
                      dpsInput.current = DPSOthers;
                      setTotalInvestMent(
                        DPSOthers > 0
                          ? parseFloat(provFund) + parseFloat(DPSOthers)
                          : parseFloat(provFund)
                      );
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Total Investment</td>
                <td className="text-center">
                  {format.format(totalInvestMent)}
                </td>
              </tr>
              <tr>
                <td>Allowed Investment (25% of Total {totalTaxIncome} ) </td>
                <td className="text-center">
                  {format.format(allowInvestment)} From{" "}
                  {format.format(limitInvestment)}
                </td>
              </tr>

              <tr>
                <td>Less Rebate on Investment Tk</td>
                <td className="text-center">
                  {format.format(lessRebateParents + " ") +
                    "   (15% of " +
                    lessRebateParents +
                    ")"}

                  {format.format(lessRebate)}
                </td>
              </tr>
              <tr>
                <td colSpan="1">Net Income Tax Payable </td>
                <td className="text-center ">
                  <p className="fw-bold">
                    {format.format(netIncomeTaxPayable)}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>)}

      { reportPhase === true &&(
        <div className="table-responsive">
          <p className="All_Headings">Taxable Income</p>
          <table className="table table-hover table-bordered total_calc"
          id="investmentTable">
            <thead>
              <tr className="total_of_IncomeDetails">
                <th scope="col">Investment Allowance and Tax Rebate</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contribution to Provident Fund</td>
                <td className="text-center">{provFund}</td>
              </tr>
              <tr>
                <td>DPS/BSP/LIP/Others (If Applicable)</td>
                <td className="text-center table_form">{dpsInput.current}
                  {/* <input
                    type="number"
                    ref={dpsField}
                    placeholder="Waiting for input"
                    defaultValue={dpsInput.current}
                    // onChange={(e) => {
                    //   //   let value = e.target.value===NaN?0:e.target.value;
                    //   //   let newTotal = parseInt(provFund*2)+parseInt(value)
                    //   //   setTotalInvestMent(newTotal)
                    //   let DPSOthers = e.target.value;
                    //   setTotalInvestMent(
                    //     DPSOthers > 0
                    //       ? parseFloat(provFund) + parseFloat(DPSOthers)
                    //       : parseFloat(provFund)
                    //   );
                    // }}
                  /> */}
                </td>
              </tr>
              <tr>
                <td>Total Investment</td>
                <td className="text-center">
                  {format.format(totalInvestMent)}
                </td>
              </tr>
              <tr>
                <td>Allowed Investment (25% of Total {totalTaxIncome} ) </td>
                <td className="text-center">
                  {format.format(allowInvestment)} From{" "}
                  {format.format(limitInvestment)}
                </td>
              </tr>

              <tr>
                <td>Less Rebate on Investment Tk</td>
                <td className="text-center">
                  {format.format(lessRebateParents + " ") +
                    "   (15% of " +
                    lessRebateParents +
                    ")"}

                  {format.format(lessRebate)}
                </td>
              </tr>
              <tr>
                <td colSpan="1">Net Income Tax Payable </td>
                <td className="text-center ">
                  <p className="fw-bold">
                    {format.format(netIncomeTaxPayable)}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
      )

      }
    </>
  );
};

export default InvestmentAllowance;
