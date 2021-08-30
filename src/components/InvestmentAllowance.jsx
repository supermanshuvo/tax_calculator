import { Component } from "react";

class InvestmentAllowance extends Component {
  render() {
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
                  <td>{this.props.PF}</td>
                </tr>
                <tr>
                  <td>DPS/BSP/LIP/Others (If Applicable)</td>
                  <td>
                    <input type="number" name="DPSOthers" id="DPSOthers" />
                  </td>
                </tr>
                <tr className="fw-bold">
                  <td>Total Investment</td>
                  <td>{0.0}</td>
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
  }
}

export default InvestmentAllowance;
