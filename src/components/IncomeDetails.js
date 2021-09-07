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
        <form onSubmit={handleSubmit(handleFormData)}>
          <div className="sector">
            <div className="row">
              <p className="All_Headings">Employee Details</p>

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
                  <label className="levelsOfEmployeeDetails">
                    Employee Code
                  </label>
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
                  <label className="levelsOfEmployeeDetails">
                    Eligible for
                  </label>
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
                  <label className="levelsOfEmployeeDetails">
                    Prov. Months
                  </label>
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
          </div>
         <div className="container mt-5">
             <h3 className="text-center mb-4 ">Income Details</h3>
             <div className="table-responsive">
             <table className="table  table-hover table-striped">
                 <thead>
                    <tr className="bg-dark text-white">
                       <th scope="col-sm-1"></th>
                       <th scope="col" className="text-center col-sm-2">
                           M.Amount
                       </th>
                       <th scope="col" className="text-center col-sm-2">
                           Y.Amount
                       </th>
                       <th scope="col" className="text-center col-sm-2">
                            L.Amount
                       </th>
                       <th scope="col" className="text-center col-sm-2">
                            Taxable Income
                       </th>
                   </tr>
                 </thead>

                <tbody>
                    <tr>
                     <th className= "col-sm-1 bar">Basic Pay</th>
                       <td className="text-center col-sm-1 border-shadow">
                         <p>
                           <input
                            name="basicmAmount"
                            value= {inComeDetailsState.basicmAmount}
                            onChange={handleChange}
                            className="col-sm-5"
                            />
                         </p>
                       </td>
                       <td className="text-center col-sm-1">
                          <input className="col-sm-5"
                            readOnly
                            value={inComeDetailsState.basicmAmount*12}
                          />    
                      </td>
                      <td className="text-center col-sm-1">
                        <input
                          name="basiclAmount"
                          value={inComeDetailsState.basiclAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                      </td>
                      <td className="text-center col-sm-1">
                        
                          <input
                            readOnly
                            value={calculateTaxable(inComeDetailsState.basicmAmount,
                             inComeDetailsState.basiclAmount)}
                            className="col-sm-5"
                          />    
                      </td>
                      
                    </tr>

                    <tr>
                       <th className="col-sm-1 bar">Housing</th>
                       <td className="text-center col-sm-1">
                          <p className="text-right">
                          <input
                            name="housingmAmount"
                            value= {inComeDetailsState.housingmAmount}
                            onChange={handleChange}
                            className="col-sm-5"
                           />
                          </p>
                       </td>
                       <td className="text-center col-sm-1">
                           <input className="col-sm-5"
                             readOnly
                             value={inComeDetailsState.housingmAmount*12}
                           />  
                       </td>
                       <td className="text-center col-sm-1">
                        <input
                          name="housinglAmount"
                          value={inComeDetailsState.housinglAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                       </td>
                       <td className="text-center col-sm-1">
                        
                          <input
                            readOnly
                            value={calculateTaxable(inComeDetailsState.housingmAmount,
                             inComeDetailsState.housinglAmount)}
                            className="col-sm-5"
                          />
                    
                       </td>

                    </tr>

                    <tr>
                       <th className="col-sm-1 bar">Medical</th>
                       <td className="text-center col-sm-1">
                          <p className="text-right">
                           <input
                            name= "medicalmAmount"
                            value= {inComeDetailsState.medicalmAmount}
                            onChange={handleChange}
                            className="col-sm-5"
                           />
                          </p>
                       </td>
                       <td className="text-center col-sm-1">
                          <input className="col-sm-5"
                            readOnly
                            value={inComeDetailsState.medicalmAmount*12}
                          />
                        
                       </td>
                       <td className="text-center col-sm-1">
                        <input
                          name="basiclAmount"
                          value={inComeDetailsState.medicallAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                       </td>
                       <td className="text-center col-sm-1">
                         
                          <input
                            readOnly
                            value={calculateTaxable(inComeDetailsState.medicalmAmount,
                            inComeDetailsState.medicallAmount)}
                            className="col-sm-5"
                          />
                      </td>
                    </tr>

                    <tr>
                      <th className="col-sm-1 bar">Conveyance</th>
                      <td className="text-center col-sm-1">
                        <p className="text-right">
                        <input
                          name="conveyancemAmount"
                          value= {inComeDetailsState.conveyancemAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                        </p>
                      </td>
                      <td className="text-center col-sm-1">
                          <input className="col-sm-5"
                            readOnly
                            value={inComeDetailsState.conveyancemAmount*12}
                          />
                        
                      </td>
                      <td className="text-center col-sm-1">
                        <input
                          name="conveyancelAmount"
                          value={inComeDetailsState.conveyancelAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                      </td>
                      <td className="text-center col-sm-1">
                            <input
                            readOnly
                            value={calculateTaxable(inComeDetailsState.conveyancemAmount,
                             inComeDetailsState.conveyancelAmount)}
                            className="col-sm-5"
                          />
                      </td>

                    </tr>

                    <tr>
                      <th className="col-sm-1 bar">Living</th>
                      <td className="text-center col-sm-1">
                        <p className="text-right">
                         <input
                          name="livingmAmount"
                          value= {inComeDetailsState.livingmAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                          />
                        </p>
                      </td>
                      <td className="text-center col-sm-1">
                          <input className="col-sm-5"
                            readOnly
                            value={inComeDetailsState.livingmAmount*12}
                          />  
                      </td>
                      <td className="text-center col-sm-1">
                        <input
                          name="livinglAmount"
                          value={inComeDetailsState.livinglAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                      </td>
                       <td className="text-center col-sm-1">
                          <input
                            readOnly
                            value={calculateTaxable(inComeDetailsState.livingmAmount,
                        inComeDetailsState.livinglAmount)}
                            className="col-sm-5"
                          />
                      </td>
                    </tr>

                    <tr>
                       <th className="col-sm-1 bar">Provedient fund</th>
                       <td className="text-center">
                          <p className="text-right">
                          <input
                          name="providentFundmAmount"
                          value= ""
                          
                          className="col-sm-5"
                          />
                          </p>
                      </td>
                       <td className="text-center col-sm-1">
                          <input className="col-sm-5"
                            value={inComeDetailsState.providentFundyAmount}
                            onChange={handleChange}
                            name='providentFundyAmount'
                          />
                        
                      </td>
                      <td className="text-center col-sm-1">
                        <input
                          name="providentFundlAmount"
                          value={inComeDetailsState.providentFundlAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                      </td>
                      <td className="text-center col-sm-1">
                        
                          <input
                            readOnly
                            value={calculateTaxable(inComeDetailsState.providentFundyAmount,
                            inComeDetailsState.providentFundlAmount,1)}
                            className="col-sm-5"
                          />
                      </td>
                    </tr>
                    <tr>
                      <th className="col-sm-1 bar">Bonus</th>
                      <td className="text-center col-sm-1">
                        <p >
                        <input
                          className="col-sm-5"
                        />
                        </p>
                      </td>
                      <td className="text-center col-sm-1">
                          <input
                            className="col-sm-5"
                            value={inComeDetailsState.bonusyAmount}
                            onChange={handleChange}
                            name="bonusAmount"
                          />
                        
                      </td>
                      <td className="text-center col-sm-1">
                        <input
                          name="bonusAmount"
                          value={inComeDetailsState.bonuslAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                      </td>
                       <td className="text-center col-sm-1">
                        
                          <input
                            readOnly
                            value={calculateTaxable(inComeDetailsState.bonusyAmount,
                            inComeDetailsState.bonuslAmount,1)}
                            className="col-sm-5"
                          />
                      </td>
                    
                    </tr>

                     <tr>
                       <th className="col-sm-1 bar">Special Amount</th>
                       <td className="text-center col-sm-1">
                          <p>
                          <input
                            name="specialAmountmAmount"
                            value={inComeDetailsState.specialAmountmAmount}
                            onChange={handleChange}
                            className="col-sm-5"
                           />
                           </p>
                      </td>
                       <td className="text-center col-sm-1">
                          <input className="col-sm-5"
                            readOnly
                            value={inComeDetailsState.specialAmountmAmount*specialYoccurrance}
                          />
                        
                      </td>
                       <td className="text-center col-sm-1">
                        <input
                          name="specialAmountlAmount"
                          value={inComeDetailsState.specialAmountlAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                      </td>
                      <td className="text-center col-sm-1">
                        
                          <input
                            readOnly
                            value={inComeDetailsState.specialAmountmAmount*specialYoccurrance}
                            className="col-sm-5"
                          />
                    
                      </td>
                    </tr>
                    <tr>
                       <th className="col-sm-1 bar">Others</th>
                       <td className="text-center col-sm-1">
                           <p >
                           <input
                             name="othersmAmount"
                             value= {inComeDetailsState.othersmAmount}
                             onChange={handleChange}
                             className="col-sm-5"
                            />
                           </p>
                      </td>
                       <td className="text-center col-sm-1">
                          <input className="col-sm-5"
                            readOnly
                            value={inComeDetailsState.othersmAmount*12}
                          />
                        
                      </td>
                       <td className="text-center col-sm-1">
                        <input
                          name="otherslAmount"
                          value={inComeDetailsState.otherslAmount}
                          onChange={handleChange}
                          className="col-sm-5"
                        />
                      </td>
                      <td className="text-center col-sm-1">
                        
                          <input className="col-sm-5"
                            readOnly
                            value={calculateTaxable(inComeDetailsState.othersmAmount,
                             inComeDetailsState.otherslAmount,othersYoccurrance)}
                          />
                    
                      </td>
                    </tr>
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
                </tbody>
                </table>
                </div>
                </div>
            {/* <p>Total Taxable Income : {totalTaxableIncome}</p> */}

            {/* <button type="submit" value="Submit">
            Submit
          </button> */}

            <div className=" d-flex justify-content-center">
              <button type="submit" className="btn" value="Submit">
                Submit
              </button>
          </div>

          {/* ////////////PART -2 ////////////// */}
          {/* <h2>Income Details: </h2> */}
        </form>
      </div>
    </>
  );
};
