// import { useState } from "react";

const TotalTax = (props) => {
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


  IF(<=0,0,
    IF(<=$,$'ITax-Exc-Car'.*$*0.01,
    IF(<=$,
        IF($'ITax-Exc-Car'.-$>0,
        ($*$*0.01)+(-$)*$*0.01,
        $'ITax-Exc-Car'.*$*0.01),
        $*$*0.01)+($*$*0.01)+
        (-($+$))*$*0.01)))
  
  IF(E42<=0,0,
    IF(H20<=$Configure.C44,$'ITax-Exc-Car'.E42*$Configure.H44*0.01,
    IF(H20<=$Configure.C45,
        IF($'ITax-Exc-Car'.E42-$Configure.C46>0,
        ($Configure.C46*$Configure.H46*0.01)+(E42-$Configure.C46)*$Configure.H47*0.01,
        $'ITax-Exc-Car'.E42*$Configure.H46*0.01),
        $Configure.C49*$Configure.H49*0.01)+($Configure.C50*$Configure.H50*0.01)+
        (E42-($Configure.C49+$Configure.C50))*$Configure.H51*0.01)))

  */
  return (
    <div className="row">
      <h5 className="bg-secondary fw-light p-2">Total Calculation</h5>
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
              <td colSpan="2">Provision Per Month {props.totalMonth} Months</td>
              <td>{props.ProvisionMonthTax}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalTax;
