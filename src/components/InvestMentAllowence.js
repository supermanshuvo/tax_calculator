import { useEffect, useState, useRef } from "react";
import TotalTaxInvest from "./TotalTaxInvest.js";

const InvestmentAllowance = ({providentFund,maxInvestTaxExemption,maxAllowedInvesment,
    totalTaxIncome,totalPayableTax,provMonth}) => {
  
  const [totalInvestMent, setTotalInvestMent] = useState(0);
  const [allowInvestment, setAllowInvestment] = useState(0);
  const [limitInvestment, setLimitInvestment] = useState(0);
  const [lessRebate,setLessRebate]=useState(0)
  const [netIncomeTaxPayable,setNetIncomeTaxPayable]=useState(0)
  const [provisionMonthTax,setProvisionMonthTax]=useState(0)

  let    firstConditionAllowInvestment = (totalTaxIncome - providentFund) * maxInvestTaxExemption * 0.01;
  let secondConditionLimitedInvestment = totalTaxIncome * provMonth * 0.01 - providentFund; 
  let configureC44 = 1000000,ConfigureC45 = 3000000,ConfigureC46 = 250000,
    ConfigureC49 = 250000,ConfigureC50 = 500000,ConfigureH44 = 15,ConfigureH46 = 15,
    ConfigureH47 = 12,ConfigureH49 = 15,ConfigureH50 = 12,ConfigureH51 = 10;
    
  //var lessRebate = null, netIncomeTaxPayable=null, provisionMonthTax=null;

  useEffect(()=>{
    setTotalInvestMent(providentFund*2)
  },[])

  let LessRebateFunc = (allowInvestment,totalTaxIncome) => {
    let result = 0;
    if (allowInvestment <= 0) {
      result = 0;
    } else if (totalTaxIncome <= configureC44) {
      result = allowInvestment * ConfigureH44 * 0.01;
    } else if (totalTaxIncome <= ConfigureC45) {
      if (allowInvestment - ConfigureC46 > 0) {
        result =
          ConfigureC46 * ConfigureH46 * 0.01 +
          (allowInvestment - ConfigureC46) * ConfigureH47 * 0.01;
      } else {
        result = allowInvestment * ConfigureH46 * 0.01;
      }
    } else {
      result =
        ConfigureC49 * ConfigureH49 * 0.01 +
        ConfigureC50 * ConfigureH50 * 0.01 +
        (allowInvestment - (ConfigureC49 + ConfigureC50)) * ConfigureH51 * 0.01;
    }

    return result;
  };

  useEffect(()=>{
        setAllowInvestment(Math.min(firstConditionAllowInvestment,maxAllowedInvesment))
        setLimitInvestment(Math.max(secondConditionLimitedInvestment,maxAllowedInvesment))
        setLessRebate(LessRebateFunc(allowInvestment,totalTaxIncome))
        setNetIncomeTaxPayable((totalPayableTax - lessRebate) < 0? 5000 : 
            ((totalPayableTax - lessRebate) < 5000? 5000: (totalPayableTax - lessRebate)))
        setProvisionMonthTax(Math.round( parseFloat(netIncomeTaxPayable / provMonth)))
  },[providentFund,maxInvestTaxExemption,maxAllowedInvesment,
    totalTaxIncome,totalPayableTax,provMonth])

  return (
    <div className="container mt-2">
      <div className="row">
        
        <div className="container">
          <div className="row">
          <div className="table-responsive">
          <table className="table table-hover table-bordered border-dark invest">
            <thead>
              <tr className="total_of_IncomeDetails">
               <th scope="col">Investment Allowance and Tax Rebate</th>
               <th></th>
              </tr>  
            </thead>
            <tbody>
              
              <tr>
                <td>Contribution to Provident Fund</td>
                <td className="text-center">{providentFund}</td>
              </tr>
              <tr>
                <td>DPS/BSP/LIP/Others (If Applicable)</td>
                <td className="text-center table_form">
                  <input type="text"   className=""  defaultValue={0} onChange={(e)=>{
                    //   let value = e.target.value===NaN?0:e.target.value;
                    //   let newTotal = parseInt(providentFund*2)+parseInt(value)
                    //   setTotalInvestMent(newTotal)
                      let DPSOthers = e.target.value;
                      setTotalInvestMent(DPSOthers > 0 ? parseFloat(providentFund*2)
                       + parseFloat(DPSOthers) : parseFloat(providentFund*2) )
                    }
                      } />
                </td>
              </tr>
              <tr className="fw-bold">
                <td>Total Investment</td>
                <td  className="text-center">{totalInvestMent}</td>
              </tr>
              <tr className="fw-bold">
                <td>Allowed Investment</td>
                <td className="text-center">
                  {allowInvestment} From {maxAllowedInvesment}
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
      <TotalTaxInvest
        AllowInvestment={allowInvestment}
        lessRebate={lessRebate}
        NetIncomeTaxPayable={netIncomeTaxPayable}
        totalMonth={provMonth}
        ProvisionMonthTax={provisionMonthTax}
      />
    </div>
  );
};

export default InvestmentAllowance;