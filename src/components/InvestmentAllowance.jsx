import { useState } from "react";
const InvestmentAllowance = (props) => {
  let ProvidentFund = props.PF;
  let [Sum, setSum] = useState(0);
  let getCalculate = (e) => {
    let DPSOthers = e.target.value;
    setSum(
      DPSOthers > 0 ? parseFloat(ProvidentFund) + parseFloat(DPSOthers) : "0"
    );
  };
  console.log();
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
                  {0.0} From {0.0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAllowance;
