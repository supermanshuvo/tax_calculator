const TotalTax = (props) => {
  let AllowInvestment = props.AllowInvestment,
    totalTaxIncome = props.TotalTaxIncome;
  let lessRebate = 0,
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
  let configureC44 = 0,
    ConfigureC45 = 0,
    ConfigureC46 = 0,
    ConfigureC49 = 0,
    ConfigureC50 = 0,
    ConfigureH44 = 0,
    ConfigureH46 = 0,
    ConfigureH47 = 0,
    ConfigureH49 = 0,
    ConfigureH50 = 0,
    ConfigureH51 = 0;
  console.log(totalTaxIncome);
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
              <td>{AllowInvestment}</td>
              <td>{lessRebate}</td>
            </tr>
            <tr>
              <td colspan="2">Net Income Tax Payable</td>
              <td>{NetIncomeTaxPayable}</td>
            </tr>
            <tr>
              <td colspan="2">Provision Per Month {totalMonth} Months</td>
              <td>{ProvisionMonthTax}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalTax;
