import { useEffect,useLayoutEffect, useState, useRef } from "react";
import TotalTaxInvest from "./TotalTaxInvest.js";
import {taxConfig} from ".././configData.js";

const InvestmentAllowance = ({provFund,totalTaxIncome,totalPayableTax,zone}) => {
  
  const [totalInvestMent, setTotalInvestMent] = useState(0);
  const [allowInvestment, setAllowInvestment] = useState(0);
  const [limitInvestment, setLimitInvestment] = useState(0);
  const [lessRebate,setLessRebate]=useState(0)
  const [netIncomeTaxPayable,setNetIncomeTaxPayable]=useState(0)
  const dpsField=useRef(0)
  const [lessRebateParents,setParents]=useState(0)


  // useEffect(()=>{
  //   console.log('dpsField ',dpsField.current.value)
  //   setTotalInvestMent(provFund + Number(dpsField.current.value))
  // },[provFund])

  let LessRebateFunc = (allowInvestment,totalTaxIncome) => {
    let result = 0;
    if (allowInvestment <= 0) {
      result = 0;
    } else if (totalTaxIncome <= taxConfig.config.configureC44) {
      result = allowInvestment *taxConfig.config.ConfigureH44 * 0.01;
    } else if (totalTaxIncome <= taxConfig.config.ConfigureC45) {
      if (allowInvestment - taxConfig.config.ConfigureC46 > 0) {
        result =
        taxConfig.config.ConfigureC46 *  taxConfig.config.ConfigureH46 * 0.01 +
          (allowInvestment - taxConfig.config.ConfigureC46) * 
            taxConfig.config.ConfigureH47 * 0.01;
      } else {
        result = allowInvestment * taxConfig.config.ConfigureH46 * 0.01;
      }
    } else {
      result =
      taxConfig.config.ConfigureC49 * taxConfig.config.ConfigureH49 * 0.01 +
      taxConfig.config.ConfigureC50 * taxConfig.config.ConfigureH50 * 0.01 +
        (allowInvestment - (taxConfig.config.ConfigureC49 + 
          taxConfig.config.ConfigureC50)) * taxConfig.config.ConfigureH51 * 0.01;
    }

    return result;
  };

  useEffect(()=>{

    let minimumTax = taxConfig.zone.cityCorporation;

    if(zone==='otherCity'){minimumTax=taxConfig.zone.otherCity}
    else if(zone==='restCountry')minimumTax=taxConfig.zone.restCountry;

    setTotalInvestMent(provFund + Number(dpsField.current.value))

    if(((totalTaxIncome -provFund)*taxConfig.config.maxInvestTaxExemption * 0.01) <  taxConfig.config.maxAllowedInvesment){
      setAllowInvestment((totalTaxIncome -provFund)*taxConfig.config.maxInvestTaxExemption * 0.01);
    }else{
      setAllowInvestment(taxConfig.config.maxAllowedInvesment);
    }

    const lessRebateParentsvar=allowInvestment-totalInvestMent;
    setParents(lessRebateParentsvar)
    setLimitInvestment(Math.max((totalTaxIncome * 
          taxConfig.config.maxInvestTaxExemption * 0.01 - provFund),
            taxConfig.config.maxAllowedInvesment))
    setLessRebate(LessRebateFunc(lessRebateParents,totalTaxIncome))
    
    let netIncomeTaxAmount = Math.max(minimumTax,totalPayableTax - lessRebate)
    if(totalPayableTax === 0){
      netIncomeTaxAmount =0;
    }
    setNetIncomeTaxPayable(netIncomeTaxAmount)
  },[totalInvestMent,netIncomeTaxPayable,
    allowInvestment,lessRebate,totalPayableTax,
    limitInvestment,lessRebateParents,totalTaxIncome,zone,provFund]
  
  )

  var format = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  });

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
                <td className="text-center">{provFund}</td>
              </tr>
              <tr>
                <td>DPS/BSP/LIP/Others (If Applicable)</td>
                <td className="text-center table_form">
                  <input type="number" ref={dpsField} placeholder="Waiting for input"
                   defaultValue={0} onChange={(e)=>{
                    //   let value = e.target.value===NaN?0:e.target.value;
                    //   let newTotal = parseInt(provFund*2)+parseInt(value)
                    //   setTotalInvestMent(newTotal)
                      let DPSOthers = e.target.value;
                      setTotalInvestMent(DPSOthers > 0 ? parseFloat(provFund)
                       + parseFloat(DPSOthers) : parseFloat(provFund) )
                    }
                      } />
                </td>
              </tr>
              <tr className="fw-bold">
                <td>Total Investment</td>
                <td  className="text-center">{format.format(totalInvestMent)}</td>
              </tr>
              <tr className="fw-bold">
                <td>Allowed Investment (25% of Total Taxable Income )  </td>
                <td className="text-center">
                  {format.format(allowInvestment)} From {format.format(limitInvestment)}
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
      <TotalTaxInvest
        AllowInvestment={lessRebateParents}
        lessRebate={lessRebate}
        NetIncomeTaxPayable={netIncomeTaxPayable}
        // totalMonth={provMonth}
        // ProvisionMonthTax={provisionMonthTax}
      />
    </div>
  );
};

export default InvestmentAllowance;