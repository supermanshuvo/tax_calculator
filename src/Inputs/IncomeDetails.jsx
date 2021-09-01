import React from "react";

const IncomeDetails = () => {
  return (
    <>
      <div className="container fields">
        <p className="All_Headings">Income Details</p>
        <form action="">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="table-responsive.sm">
                <table className="table">
                  {/* All headings */}
                  <thead>
                    <tr className="total_of_IncomeDetails">
                      <th scope="col"></th>
                      <th scope="col" className="text-center">
                        M.Amount
                      </th>
                      <th scope="col" className="text-center">
                        L.Amount
                      </th>
                      <th scope="col" className="text-center">
                        Y.Amount
                      </th>
                      <th scope="col" className="text-center">
                        Taxable Income
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1st item */}
                    <tr>
                      <th className="inside_th">Basic Pay</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 2nd item */}
                    <tr>
                      <th className="inside_th">Housing</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 3rd item */}
                    <tr>
                      <th className="inside_th">Meidcal</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 4th item */}
                    <tr>
                      <th className="inside_th">Conveyance</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 5th item */}
                    <tr>
                      <th className="inside_th">Living</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 6th item */}
                    <tr>
                      <th className="inside_th">Provident Fund</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 7th item */}
                    <tr>
                      <th className="inside_th"> Bonus</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 8th item */}
                    <tr>
                      <th className="inside_th">Special Amount</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 9th item */}
                    <tr>
                      <th className="last_point">Others</th>
                      <td className="last_point">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">0</p>
                      </td>
                      <td className="last_point">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* Calculating Total */}
                    <tr className="total_of_IncomeDetails">
                      <th className="inside_th">Total</th>
                      <td></td>
                      <td className="withoutInputFields"></td>
                      <td></td>
                      <td className="withoutInputFields">
                        <p className="text-center p_of_total_in_Income_Details">
                          0
                        </p>
                      </td>
                    </tr>
                    {/* end of all items and table */}
                  </tbody>
                </table>
              </div>

              {/*in next line "col-9" div will have been ended */}
            </div>
            {/*in next line "row" div will have been ended */}
          </div>
          {/*in next line "form"  will have been ended */}
        </form>
        <div className=" d-flex justify-content-end">
          <button className="btn calculate">caculate</button>
        </div>

        <br />
        <br />
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
};

export default IncomeDetails;
