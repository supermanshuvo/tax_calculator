import React from "react";

const IncomeDetails = () => {
  return (
    <>
      <div className="container">
        <p className="All_Headings">Income Details</p>
        <form action="">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="table-responsive.sm">
                <table className="table table-hover">
                  {/* All headings */}
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">M.Amount</th>
                      <th scope="col">L.Amount</th>
                      <th scope="col">Y.Amount</th>
                      <th scope="col">Taxable Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1st item */}
                    <tr>
                      <th>
                        <span>*</span>Basic Pay
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 2nd item */}
                    <tr>
                      <th>
                        <span>*</span>Housing
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 3rd item */}
                    <tr>
                      <th>
                        <span>*</span>Meidcal
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 4th item */}
                    <tr>
                      <th>Conveyance</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 5th item */}
                    <tr>
                      <th>Living</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 6th item */}
                    <tr>
                      <th>Provident Fund</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 7th item */}
                    <tr>
                      <th>
                        {" "}
                        <span>*</span> Bonus
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 8th item */}
                    <tr>
                      <th>Special Amount(if any)</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* 9th item */}
                    <tr>
                      <th>Others</th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields"></td>
                    </tr>
                    {/* Calculating Total */}
                    <tr style={{ borderTop: "red" }}>
                      <th>Total</th>
                      <td></td>
                      <td className="withoutInputFields"></td>
                      <td></td>
                      <td className="withoutInputFields"></td>
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
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
};

export default IncomeDetails;
