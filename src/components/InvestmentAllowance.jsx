const InvestmentAllowance = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <h5 className="bg-secondary fw-light p-2">
          Investment Allowance and Tax Rebate
        </h5>
        <div className="col-6">
          <table>
            <tbody>
              <tr>
                <td>Aontribution to Provident Fund</td>
                <td>0.000</td>
              </tr>
              <tr>
                <td>DPS/BSP/LIP/Others (If Applicable)</td>
                <td>00.000</td>
              </tr>
              <tr>
                <td>Total Investment</td>
              </tr>
              <tr>
                <td>Allowed Investment</td>
                <td>00.00 From 00.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAllowance;
