import jsPDF from "jspdf";
import { useReducer, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const InComeDetails = (props) => {
  const inComeDetailsInit = {
    basicmAmount: 0,
    basiclAmount: 0,
    housingmAmount: 0,
    housinglAmount: 0,
    medicalmAmount: 0,
    medicallAmount: 0,
    conveyancemAmount: 0,
    conveyancelAmount: 0,
    livingmAmount: 0,
    livinglAmount: 0,
    providentFundyAmount: 0,
    providentFundlAmount: 0,
    bonusyAmount: 0,
    bonuslAmount: 0,
    specialAmountmAmount: 0,
    specialAmountlAmount: 0,
    othersmAmount: 0,
    otherslAmount: 0,
  };
  const reducerFunc = (state, newState) => ({ ...state, ...newState });
  const [totalTaxableIncome, setTotalTaxableIncome] = useState(0);
  const { handleSubmit, register } = useForm();

  const [inComeDetailsState, setIncomeDetails] = useReducer(
    reducerFunc,
    inComeDetailsInit
  );
  const specialYoccurrance = 6,
    othersYoccurrance = 2;

  const calculateTaxable = (mAmount, lAmount, yOccurrance = 12) => {
    const value =
      mAmount * yOccurrance - lAmount > 0 ? mAmount * yOccurrance - lAmount : 0;
    return value;
  };

  const calculateTaxableIncome = () => {
    const totalTaxable =
      calculateTaxable(
        inComeDetailsState.basicmAmount,
        inComeDetailsState.basiclAmount
      ) +
      calculateTaxable(
        inComeDetailsState.housingmAmount,
        inComeDetailsState.housinglAmount
      ) +
      calculateTaxable(
        inComeDetailsState.medicalmAmount,
        inComeDetailsState.medicallAmount
      ) +
      calculateTaxable(
        inComeDetailsState.conveyancemAmount,
        inComeDetailsState.conveyancelAmount
      ) +
      calculateTaxable(
        inComeDetailsState.livingmAmount,
        inComeDetailsState.livinglAmount
      ) +
      calculateTaxable(
        inComeDetailsState.providentFundyAmount,
        inComeDetailsState.providentFundlAmount,
        1
      ) +
      calculateTaxable(
        inComeDetailsState.bonusyAmount,
        inComeDetailsState.bonuslAmount,
        1
      ) +
      calculateTaxable(
        inComeDetailsState.specialAmountmAmount,
        inComeDetailsState.specialAmountlAmount,
        specialYoccurrance
      ) +
      calculateTaxable(
        inComeDetailsState.othersmAmount,
        inComeDetailsState.otherslAmount,
        othersYoccurrance
      );
    return totalTaxable;
  };

  useEffect(() => {
    setTotalTaxableIncome(calculateTaxableIncome());
  });

  const handleChange = (evnt) => {
    const name = evnt.target.name;
    const newValue = Number(evnt.target.value);
    setIncomeDetails({ [name]: newValue });
    //calculateTaxableIncome()
  };
  const handleFormData = (formData) => {
    const provFund =
      inComeDetailsState.providentFundyAmount -
      inComeDetailsState.providentFundlAmount;
    props.handleStates(formData, totalTaxableIncome, provFund, true);
    //alert(`${formData.department} taxable: ${totalTaxableIncome}`)
  };

  return (
    <>
      <div className="container-fluid fields">
        <p className="All_Headings">Employee Details</p>

        <form onSubmit={handleSubmit(handleFormData)}>
          <div className="row">
            {/* left-side-fields starts */}
            <div className="col-lg-6 col-md-12 table-left mx-auto">
              <div className="form-group">
                <label className="levelsOfEmployeeDetails">
                  Enter Employee Name
                </label>
                <input
                  {...register("employeeName")}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Employee Code</label>
                <input
                  {...register("employeeCode")}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Location</label>
                <input
                  {...register("location")}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Department</label>
                <input
                  {...register("department")}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Join Date</label>
                <input
                  {...register("joinDate")}
                  type="date"
                  className="form-control"
                  required
                  style={{ fontSize: "1.5vw" }}
                />
              </div>
            </div>

            {/* left-side-fields ends */}

            {/* right-side-fields starts
             */}
            <div className="col-lg-6 col-md-12 table-right">
              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Branch</label>
                <input
                  {...register("branch")}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Designation</label>
                <input
                  type="text"
                  {...register("designation")}
                  className="form-control"
                  required
                />
              </div>
              <div>
                <label className="levelsOfEmployeeDetails">Eligible for</label>
                <select
                  {...register("eligibility")}
                  className="form-select employee_details_rightside"
                  aria-label="Default select example"
                  defaultValue={12}
                >
                  <optgroup>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="levelsOfEmployeeDetails">Gender</label>
                <select
                  {...register("gender")}
                  className="form-select employee_details_rightside"
                  aria-label="Default select example"
                  defaultValue={"M"}
                >
                  <optgroup>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="levelsOfEmployeeDetails">Prov. Months</label>
                <select
                  {...register("provMonths")}
                  className="form-select employee_details_rightside"
                  aria-label="Default select example"
                  defaultValue={12}
                >
                  <optgroup>
                    <option>Open this select menu</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* right-side-fields ends */}
          </div>
          {/* <h2>Income Details: </h2> */}
          <p className="All_Headings">Income Details</p>
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="table-responsive.sm">
                <table className="table">
                  <thead>
                    <tr className="total_of_IncomeDetails">
                      <th scope="col"></th>
                      <th scope="col" className="text-center">
                        M. Amount
                      </th>
                      <th scope="col" className="text-center">
                        Y.Amount
                      </th>
                      <th scope="col" className="text-center">
                        L.Amount
                      </th>
                      <th scope="col" className="text-center">
                        Taxable Income
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* 1st item */}
                      <th className="inside_th">Basic Pay</th>
                      <td>
                        <input
                          name="basicmAmount"
                          className="inpOfIncomeDetails"
                          value={inComeDetailsState.basicmAmount}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={inComeDetailsState.basicmAmount * 12}
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          className="inpOfIncomeDetails"
                          name="basiclAmount"
                          value={inComeDetailsState.basiclAmount}
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.basicmAmount,
                            inComeDetailsState.basiclAmount
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 2nd item */}
                      <th className="inside_th">Housing</th>
                      <td>
                        <input
                          onChange={handleChange}
                          name="housingmAmount"
                          value={inComeDetailsState.housingmAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={inComeDetailsState.housingmAmount * 12}
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="housinglAmount"
                          value={inComeDetailsState.housinglAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.housingmAmount,
                            inComeDetailsState.housinglAmount
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 3rd item */}
                      <th className="inside_th">Medical</th>
                      <td>
                        <input
                          onChange={handleChange}
                          name="medicalmAmount"
                          value={inComeDetailsState.medicalmAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={inComeDetailsState.medicalmAmount * 12}
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="medicallAmount"
                          value={inComeDetailsState.medicallAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.medicalmAmount,
                            inComeDetailsState.medicallAmount
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 4th item */}
                      <th className="inside_th">Conveyance</th>
                      <td>
                        <input
                          onChange={handleChange}
                          name="conveyancemAmount"
                          value={inComeDetailsState.conveyancemAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={inComeDetailsState.conveyancemAmount * 12}
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="conveyancelAmount"
                          value={inComeDetailsState.conveyancelAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.conveyancemAmount,
                            inComeDetailsState.conveyancelAmount
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 5th item */}
                      <th className="inside_th">Living</th>
                      <td>
                        <input
                          onChange={handleChange}
                          name="livingmAmount"
                          value={inComeDetailsState.livingmAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={inComeDetailsState.livingmAmount * 12}
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="livinglAmount"
                          value={inComeDetailsState.livinglAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.livingmAmount,
                            inComeDetailsState.livinglAmount
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 6th item */}
                      <th className="inside_th">Provident Fund</th>
                      <td>
                        <input
                          name="providentFundmAmount"
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="providentFundyAmount"
                          value={inComeDetailsState.providentFundyAmount}
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="providentFundlAmount"
                          value={inComeDetailsState.providentFundlAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.providentFundyAmount,
                            inComeDetailsState.providentFundlAmount,
                            1
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 7th item */}
                      <th className="inside_th">Bonus</th>
                      <td>
                        <input className="inpOfIncomeDetails" />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="bonusyAmount"
                          value={inComeDetailsState.bonusyAmount}
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="bonuslAmount"
                          value={inComeDetailsState.bonuslAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.bonusyAmount,
                            inComeDetailsState.bonuslAmount,
                            1
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 8th item */}
                      <th className="inside_th">Special Amount</th>
                      <td>
                        <input
                          onChange={handleChange}
                          name="specialAmountmAmount"
                          value={inComeDetailsState.specialAmountmAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={
                            inComeDetailsState.specialAmountmAmount *
                            specialYoccurrance
                          }
                          className="withoutInputFields"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleChange}
                          name="specialAmountlAmount"
                          value={inComeDetailsState.specialAmountlAmount}
                          className="inpOfIncomeDetails"
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.specialAmountmAmount,
                            inComeDetailsState.specialAmountlAmount,
                            specialYoccurrance
                          )}
                          className="withoutInputFields"
                        />
                      </td>
                    </tr>
                    <tr>
                      {/* 9th item */}
                      <th className="last_point">Others</th>
                      <td className="last_point">
                        <input
                          onChange={handleChange}
                          name="othersmAmount"
                          value={inComeDetailsState.othersmAmount}
                          className="inpOfIncomeDetails "
                        />
                      </td>
                      <td className=" last_point">
                        <input
                          readOnly
                          className="withoutInputFields "
                          value={inComeDetailsState.othersmAmount * 12}
                        />
                      </td>
                      <td className="last_point">
                        <input
                          onChange={handleChange}
                          name="otherslAmount"
                          value={inComeDetailsState.otherslAmount}
                          className="inpOfIncomeDetails "
                        />
                      </td>
                      <td className=" last_point">
                        <input
                          readOnly
                          value={calculateTaxable(
                            inComeDetailsState.othersmAmount,
                            inComeDetailsState.otherslAmount,
                            othersYoccurrance
                          )}
                          className="withoutInputFields "
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <p>Total Taxable Income : {totalTaxableIncome}</p> */}

          {/* Calculating Total */}
          <tr className="total_of_IncomeDetails">
            <th className="inside_th">Total</th>
            <td></td>
            <td className="withoutInputFields"></td>
            <td></td>
            <td className="withoutInputFields">
              <p className="text-center text-danger p_of_total_in_Income_Details">
                <b>{totalTaxableIncome}</b>
              </p>
            </td>
          </tr>

          {/* <button type="submit" value="Submit">
            Submit
          </button> */}

          <div className=" d-flex justify-content-center">
            <button type="submit" className="btn" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
