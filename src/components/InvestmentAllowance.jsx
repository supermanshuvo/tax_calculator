import { useState } from "react";
import TotalTax from "./TotalTax";
const InvestmentAllowance = (props) => {
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

  let ProvisionMonthTax = parseInt(NetIncomeTaxPayable / totalMonth);

  return (
    <div className="container mt-2">
      <div className="row">
        <h5 className="bg-secondary fw-light p-2">
          Investment Allowance and Tax Rebate
        </h5>
        <div className="container-fluid">
          <table className="table">
            <tbody>
              <tr>
                <td>Contribution to Provident Fund</td>
                <td>{ProvidentFund}</td>
              </tr>
              <tr>
                <td>DPS/BSP/LIP/Others (If Applicable)</td>
                <td>
                  <input type="text" onChange={getCalculate} />
                </td>
              </tr>
              <tr className="fw-bold">
                <td>Total Investment</td>
                <td>{Sum}</td>
              </tr>
              <tr className="fw-bold">
                <td>Allowed Investment</td>
                <td>
                  {AllowInvestment} From {LimitInvestment}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <TotalTax
        AllowInvestment={AllowInvestment}
        lessRebate={LessRebate}
        NetIncomeTaxPayable={NetIncomeTaxPayable}
        totalMonth={totalMonth}
        ProvisionMonthTax={ProvisionMonthTax}
      />
    </div>
  );
};

export default InvestmentAllowance;
