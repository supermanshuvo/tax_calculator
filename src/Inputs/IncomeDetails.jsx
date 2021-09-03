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
                          name="basicmAmount"
                          value={inComeDetailsState.basicmAmount}
                          onChange={handleChange}
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={inComeDetailsState.basicmAmount * 12}
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="basiclAmount"
                          value={inComeDetailsState.basiclAmount}
                          type="number"
                          id=""
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.basicmAmount,
                              inComeDetailsState.basiclAmount
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* 2nd item */}
                    <tr>
                      <th className="inside_th">Housing</th>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="housingmAmount"
                          value={inComeDetailsState.housingmAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={inComeDetailsState.housingmAmount * 12}
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="housinglAmount"
                          value={inComeDetailsState.housinglAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.housingmAmount,
                              inComeDetailsState.housinglAmount
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* 3rd item */}
                    <tr>
                      <th className="inside_th">Meidcal</th>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="medicalmAmount"
                          value={inComeDetailsState.medicalmAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={inComeDetailsState.medicalmAmount * 12}
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="medicallAmount"
                          value={inComeDetailsState.medicallAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.medicalmAmount,
                              inComeDetailsState.medicallAmount
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* 4th item */}
                    <tr>
                      <th className="inside_th">Conveyance</th>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="conveyancemAmount"
                          value={inComeDetailsState.conveyancemAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={inComeDetailsState.conveyancemAmount * 12}
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="conveyancelAmount"
                          value={inComeDetailsState.conveyancelAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.conveyancemAmount,
                              inComeDetailsState.conveyancelAmount
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* 5th item */}
                    <tr>
                      <th className="inside_th">Living</th>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="livingmAmount"
                          value={inComeDetailsState.livingmAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={inComeDetailsState.livingmAmount * 12}
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="livinglAmount"
                          value={inComeDetailsState.livinglAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.livingmAmount,
                              inComeDetailsState.livinglAmount
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* 6th item */}
                    <tr>
                      <th className="inside_th">Provident Fund</th>
                      <td>
                        <input
                          type="number"
                          name="providentFundmAmount"
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            onChange={handleChange}
                            name="providentFundyAmount"
                            value={inComeDetailsState.providentFundyAmount}
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="providentFundlAmount"
                          value={inComeDetailsState.providentFundlAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.providentFundyAmount,
                              inComeDetailsState.providentFundlAmount,
                              1
                            )}
                          />
                        </p>
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
                        <p className="text-center">
                          <input
                            onChange={handleChange}
                            name="bonusyAmount"
                            value={inComeDetailsState.bonusyAmount}
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="bonuslAmount"
                          value={inComeDetailsState.bonuslAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.bonusyAmount,
                              inComeDetailsState.bonuslAmount,
                              1
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* 8th item */}
                    <tr>
                      <th className="inside_th">Special Amount</th>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="specialAmountmAmount"
                          value={inComeDetailsState.specialAmountmAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={
                              inComeDetailsState.specialAmountmAmount *
                              specialYoccurrance
                            }
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="specialAmountlAmount"
                          value={inComeDetailsState.specialAmountlAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.specialAmountmAmount,
                              inComeDetailsState.specialAmountlAmount,
                              specialYoccurrance
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* 9th item */}
                    <tr>
                      <th className="last_point">Others</th>
                      <td className="last_point">
                        <input
                          type="number"
                          onChange={handleChange}
                          name="othersmAmount"
                          value={inComeDetailsState.othersmAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">
                          <input
                            readOnly
                            value={inComeDetailsState.othersmAmount * 12}
                          />
                        </p>
                      </td>
                      <td className="last_point">
                        <input
                          type="number"
                          onChange={handleChange}
                          name="otherslAmount"
                          value={inComeDetailsState.otherslAmount}
                          className="inpOfIncomeDetails"
                          defaultValue={0}
                        />
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">
                          <input
                            readOnly
                            value={calculateTaxable(
                              inComeDetailsState.othersmAmount,
                              inComeDetailsState.otherslAmount,
                              othersYoccurrance
                            )}
                          />
                        </p>
                      </td>
                    </tr>
                    {/* Calculating Total */}
                    <tr className="total_of_IncomeDetails">
                      <th className="inside_th">Total Taxable Income</th>
                      <td></td>
                      <td className="withoutInputFields"></td>
                      <td></td>
                      <td className="withoutInputFields">
                        <p className="text-center text-danger p_of_total_in_Income_Details">
                          <b>{totalTaxableIncome}</b>
                        </p>
                      </td>
                    </tr>
                    {/* for button */}
                    {/* <tr className="total_of_IncomeDetails">
                      <th className="inside_th text-danger "></th>
                      <td></td>
                      <td className="withoutInputFields"></td>
                      <td></td>
                      <td className="withoutInputFields">
                        <p className="text-center text-danger p_of_total_in_Income_Details">
                          <div className=" d-flex justify-content-end">
                            <button className="btn calculate">caculate</button>
                          </div>
                        </p>
                      </td>
                    </tr> */}
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
        <div className=" d-flex justify-content-center">
          <button type="submit" value="submit" className="btn">
            caculate
          </button>
        </div>
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
};

export default IncomeDetails;
