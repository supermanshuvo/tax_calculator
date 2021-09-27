import { useReducer, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { taxConfig } from "../configData.js";

export const InComeDetails = (props) => {
  const [taxArray,setTaxArray]= useState(taxConfig.taxRules.general)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormData = (formData) => {
    formData.basicAmount = Number(formData.basicAmount);
    formData.housingAmount = Number(formData.housingAmount);
    formData.medicalAmount = Number(formData.medicalAmount);
    formData.conveyanceAmount = Number(formData.conveyanceAmount);
    formData.othersAmount = Number(formData.othersAmount);
    formData.pvMonths = Number(formData.pvMonths);
    if (formData.bonusAmount === undefined) formData.bonusAmount = 0;
    if (formData.provFund === undefined) formData.provFund = 0;
    formData.bonusAmount = Number(formData.bonusAmount);
    formData.provFund = Number(formData.provFund);
    props.handleStates(formData, true);
  };
  
  const changeCategory=(ev)=>{
    let category=ev.target.value
  if(category === "disabled"){
    
    setTaxArray(taxConfig.taxRules.disabled)

  }
  else if(category === "freedomFighters"){
 
    setTaxArray(taxConfig.taxRules.freedomFighters)
    

  }
  else if(category === "general"){
    setTaxArray(taxConfig.taxRules.general)

  }
  else{
    setTaxArray(taxConfig.taxRules.oldAge)
  
  }
  }

  // const checkboxBonusHandler = () => {
  //   let prev = inputField.bonus;
  //   setInputField({ bonus: !prev });
  // };
  // const checkboxprovFundHandler = () => {
  //   let prev = inputField.provFund;
  //   setInputField({ provFund: !prev });
  // };

  return (
    <>
      <div className="container all_options_div mt-5">
        <div className="container">
          <div className="row">
            <div className=" col-lg-8  col-sm-12">
              <div className="table_wrapper ">
              <h3 className="salery_range">Tax Rules</h3>
              <div className="table-responsive">
              <table className="table  table-bordered border-dark ">
                <thead>
                  <tr>
                    <th scope="col">Step</th>
                    <th scope="col">amount</th>
                    <th scope="col">Tax %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th >first tk</th>
                    <td>{taxArray[0]}</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>next tk</th>
                    <td>{taxArray[1]}</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <th>next tk</th>
                    <td>{taxArray[2]}</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th >next tk</th>
                    <td>{taxArray[3]}</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th>next tk</th>
                    <td>{taxArray[4]}</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th >next tk</th>
                    <td>rest of all</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
            </div>
              </div>
              <form className="form_style" onSubmit={handleSubmit(handleFormData)}>
                <h3>Salary Details</h3>
                <div className="d-flex justify-content-between ">
                <div className="form-group">
                    <label>Choose Category</label>
                    <select
                      className="form-control"
                        type="number"
                        {...register("category")}
                        onChange={changeCategory}
                      >
                        <option value="general" selected>
                          General
                        </option>
                        <option value="oldAge">Female/OldAge(65+)</option>
                        <option value="freedomFighters">Gazetted Freedom Fighters</option>
                        <option value="disabled">Disabled</option>
                      </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Choose Zone</label>
                    <select
                      className="form-control"
                        type="number"
                        {...register("zone")}
                      >
                        <option value="cityCorporation" selected>
                          Dhaka/Chitagong City
                        </option>
                        <option value="otherCity">Other City</option>
                        <option value="restCountry">Rest of the Country</option>
                      </select>
                  </div>

          

                </div>  
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Basic Amount</label>
                    <input
                      {...register("basicAmount", {
                        required: "error message",
                        min: {
                          value: 1,
                          message: "Basic Amount Must Be Positive Number", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="number"
                      className="form-control"
                      placeholder="0"
                    />
                    {errors.basicAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Housing amount</label>
                    <input
                      {...register("housingAmount", {
                        min: {
                          value: 0,
                          message: "Must Be Positive Number",
                          // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      defaultValue={0}
                    />
                    {errors.housingAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Medical amount</label>
                    <input
                      {...register("medicalAmount", {
                        min: {
                          value: 0,
                          message: "Must Be Positive Number",
                          // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      defaultValue={0}
                    />
                    {errors.medicalAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Conveyance</label>
                    <input
                      {...register("conveyanceAmount", {
                        min: {
                          value: 0,
                          message: "Must Be Positive Number",
                          // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="number"
                      className="form-control"
                      defaultValue={0}
                    />

                    {errors.conveyanceAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>
                </div>
                

                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    {/* <input
                      id="bonuas_checkbox"
                      type="checkbox"
                      name="bonus"
                      onClick={checkboxBonusHandler}
                    /> */}
                    <label  className="form-check-label">Bonus</label>
                    {/* {inputField.bonus ? ( */}
                      <input
                        {...register("bonusAmount", {
                          min: {
                            value: 0,
                            message: "Must Be Positive Number",
                            // JS only: <p>error message</p> TS only support string
                          },
                        })}
                        type="number"
                        className="form-control"
                        defaultValue={0}
                      />
                    {/* ) : null} */}
                    {errors.bonusAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    {/* <input
                      id="prov_checkbox"
                      type="checkbox"
                      name="provFund"
                      onClick={checkboxprovFundHandler}
                    /> */}
                    <label  className="form-check-label">Providient Fund</label>
                    {/* {inputField.provFund ? ( */}
                      <input
                        {...register("provFund", {
                          min: {
                            value: 0,
                            message: "Must Be Positive Number",
                            // JS only: <p>error message</p> TS only support string
                          },
                        })}
                        type="number"
                        className="form-control"
                        defaultValue={0}
                      />
                    {/* ) : null} */}
                    {errors.provFund && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-between ">
                <div className="form-group">
                    <label>Others</label>
                    <input
                      {...register("othersAmount", {
                        min: {
                          value: 0,
                          message: "Must Be Positive Number",
                          // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      defaultValue={0}
                    />
                    {errors.othersAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>
                <div className="form-group">
                    <label>Number Of month</label>
                    <select
                      className="form-control"
                      type="number"
                      {...register("pvMonths")}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12} selected>
                        12
                      </option>
                    </select>
                  </div>

                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className=" col-lg-4 col-sm-4">
           <div className="table_wrapper">
            <h3 className="salery_range">Tax Rules</h3>
              <div className="table-responsive">
              <table className="table  table-bordered border-dark ">
                <thead>
                  <tr>
                    <th scope="col">Step</th>
                    <th scope="col">amount</th>
                    <th scope="col">Tax %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th >first tk</th>
                    <td>{taxArray[0]}</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>next tk</th>
                    <td>{taxArray[1]}</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <th>next tk</th>
                    <td>{taxArray[2]}</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th >next tk</th>
                    <td>{taxArray[3]}</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th>next tk</th>
                    <td>{taxArray[4]}</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th >next tk</th>
                    <td>rest of all</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
