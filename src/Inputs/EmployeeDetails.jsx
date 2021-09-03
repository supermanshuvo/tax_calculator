import React from "react";
import jsPDF from "jspdf";
import { useReducer, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EmployeeDetails = (props) => {
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
      <div className="container fields">
        <p className="All_Headings">Employee Details</p>
        <form onSubmit={handleSubmit(handleFormData)}>
          <div className="row">
            {/* left-side-fields starts */}
            <div className="col-lg-6 col-md-12 table-left">
              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Employee Name</label>
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
                  className="form-control date"
                  required
                />
              </div>

              <div className="form-group">
                <label className="levelsOfEmployeeDetails">Join Date</label>
                <input
                  type="date"
                  className="form-control date"
                  required
                  // style={{ fontSize: "1.5vw" }}
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
                <input type="text" className="form-control" required />
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
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
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
          <div>
            {/* <button type="button" className="btn btn-success">
              Success
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeDetails;
