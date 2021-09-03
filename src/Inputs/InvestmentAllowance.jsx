import { useEffect, useState } from "react";
import InvestAllowancep2 from "./InvestAllowancep2";
import jsPDF from "jspdf";

const InvestmentAllowance = (props) => {
  const generatePdfReport = () => {
    let pdfDoc = new jsPDF();
    pdfDoc.html(document.querySelector(".container"), {
      callback: function (pdf) {
        pdf.save("taxReport.pdf");
      },
    });
  };
  let ProvidentFund = props.PF;
  let [Sum, setSum] = useState(0);
  let [AllowInvestment, setAllowInvestment] = useState(0);
  let [LimitInvestment, setLimitInvestment] = useState(0);
  let H12 = props.ConfigureH12,
    H17 = props.ConfigureH17,
    totalTaxIncome = props.TotalTaxIncome;
  let firstConditionAllowInvestment =
    (totalTaxIncome - ProvidentFund) * H12 * 0.01;

  let secondConditionLimitedInvestment =
    totalTaxIncome * H12 * 0.01 - ProvidentFund;

  let getCalculate = (e) => {
    let DPSOthers = e.target.value;
    setSum(
      DPSOthers > 0 ? parseFloat(ProvidentFund) + parseFloat(DPSOthers) : "0"
    );

    if (firstConditionAllowInvestment < H17) {
      setAllowInvestment(firstConditionAllowInvestment);
    } else {
      setAllowInvestment(H17);
    }

    if (secondConditionLimitedInvestment > H17) {
      setLimitInvestment(secondConditionLimitedInvestment);
    } else {
      setLimitInvestment(H17);
    }
  };

  // total calculation vale
  let totalPayableTax = props.TotalPayableTax,
    totalMonth = props.ProvMonth;

  let configureC44 = 1000000,
    ConfigureC45 = 3000000,
    ConfigureC46 = 250000,
    ConfigureC49 = 250000,
    ConfigureC50 = 500000,
    ConfigureH44 = 15,
    ConfigureH46 = 15,
    ConfigureH47 = 12,
    ConfigureH49 = 15,
    ConfigureH50 = 12,
    ConfigureH51 = 10;
  let LessRebateFunc = () => {
    let result = 0;
    if (AllowInvestment <= 0) {
      result = 0;
    } else if (totalTaxIncome <= configureC44) {
      result = AllowInvestment * ConfigureH44 * 0.01;
    } else if (totalTaxIncome <= ConfigureC45) {
      if (AllowInvestment - ConfigureC46 > 0) {
        result =
          ConfigureC46 * ConfigureH46 * 0.01 +
          (AllowInvestment - ConfigureC46) * ConfigureH47 * 0.01;
      } else {
        result = AllowInvestment * ConfigureH46 * 0.01;
      }
    } else {
      result =
        ConfigureC49 * ConfigureH49 * 0.01 +
        ConfigureC50 * ConfigureH50 * 0.01 +
        (AllowInvestment - (ConfigureC49 + ConfigureC50)) * ConfigureH51 * 0.01;
    }
    /* IF(AllowInvestment<=0,0,
    IF(totalTaxIncome<=ConfigureC44,AllowInvestment*ConfigureH44*0.01,
    IF(totalTaxIncome<=ConfigureC45,
        IF(AllowInvestment-ConfigureC46>0,
        (ConfigureC46*ConfigureH46*0.01)+(AllowInvestment-ConfigureC46)*ConfigureH47*0.01,
        AllowInvestment*ConfigureH46*0.01),
        ConfigureC49*ConfigureH49*0.01)+(ConfigureC50*ConfigureH50*0.01)+
        (AllowInvestment-(ConfigureC49+ConfigureC50))*ConfigureH51*0.01))) */
    return result;
  };
  let LessRebate = LessRebateFunc();
  let result =
    totalPayableTax - LessRebate < 0
      ? 5000
      : totalPayableTax - LessRebate < 5000
      ? 5000
      : totalPayableTax - LessRebate;
  let NetIncomeTaxPayable = result;

  let ProvisionMonthTax = Math.round(
    parseFloat(NetIncomeTaxPayable / totalMonth)
  );

  return (
    <>
      <div className="container fields">
        <h3>
          {props.ProvMonth} : {props.TotalPayable} : {props.TotalTaxIncome}:
          {props.PF}
        </h3>
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
                  {/* <input
                    type="number"
                    defaultValue={0}
                    className="inpOfInvestmentAllowance"
                  /> */}
                  <p>{ProvidentFund}</p>
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
                      type="text"
                      onChange={getCalculate}
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
                    <p>
                      {Sum}
                      {/* set total defaultValue insted of 0 */}
                    </p>
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
                    <pre>
                      {AllowInvestment} From {LimitInvestment}
                    </pre>
                    {/* dummy defaultValues inside p */}
                  </div>
                </div>
              </div>
              <InvestAllowancep2
                AllowInvestment={AllowInvestment}
                lessRebate={LessRebate}
                NetIncomeTaxPayable={NetIncomeTaxPayable}
                totalMonth={totalMonth}
                ProvisionMonthTax={ProvisionMonthTax}
              />

              {/*in next line "col-9 mx-auto" div will have been ended */}
            </div>
            {/*in next line row "div" will have been ended */}
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn" onClick={generatePdfReport}>
              Download Report
            </button>
          </div>
        </form>
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
};

export default InvestmentAllowance;
