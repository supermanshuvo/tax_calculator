import { useState } from "react";
import { useForm } from "react-hook-form";
import { taxConfig } from "../configData.js";

export const InComeDetails = (props) => {
  const [yearlyCheck, setYearlyCheck] = useState(false);

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
    formData.yearlyCheck = yearlyCheck;
    formData.pvMonths = Number(formData.pvMonths);
    if (yearlyCheck === true) formData.pvMonths = 1;
    if (formData.bonusAmount === undefined) formData.bonusAmount = 0;
    if (formData.provFund === undefined) formData.provFund = 0;
    formData.bonusAmount = Number(formData.bonusAmount);
    formData.provFund = Number(formData.provFund);
    props.handleStates(formData, true);
  };

  const changeCategory2 = (ev) => {
    let category = ev.target.value;
    props.changeCategory(category)
  };

  // const checkboxBonusHandler = () => {
  //   let prev = inputField.bonus;
  //   setInputField({ bonus: !prev });
  // };

  return (
    <>
      <div className="container all_options_div mt-5">
        <div className="container">
          <div className="row">
            <div className=" col-lg-8  col-sm-12">
              <form
                className="form_style"
                onSubmit={handleSubmit(handleFormData)}
              >
                <div className='row'>
                  <div className='col-md-8 col-sm-8'><h3>Salary Details</h3></div>
                  <div className='col-md-4 col-sm-4'>
                  <button className="btn btn-light"  type="button" data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                   Click To See Tax Rules</button>

                  </div>
                </div>
                
                <div className="d-flex justify-content-between ">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      onClick={() => setYearlyCheck(!yearlyCheck)}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Calculate your tax on yearly amount
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Choose Category</label>
                    <select
                      className="form-control"
                      type="number"
                      {...register("category")}
                      onChange={changeCategory2}
                      defaultValue={"general"}
                    >
                      <option value="general">General</option>
                      <option value="oldAge">Female/OldAge(65+)</option>
                      <option value="freedomFighters">
                        Gazetted Freedom Fighters
                      </option>
                      <option value="disabled">Disabled</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Choose Zone</label>
                    <select
                      defaultValue={"cityCorporation"}
                      className="form-control"
                      type="number"
                      {...register("zone")}
                    >
                      <option value="cityCorporation">
                        Dhaka/Chitagong City
                      </option>
                      <option value="otherCity">Other City</option>
                      <option value="restCountry">Rest of the Country</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Basic Amount{yearlyCheck ? "(y)" : ""}</label>
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
                    {/* <input
                      id="bonuas_checkbox"
                      type="checkbox"
                      name="bonus"
                      onClick={checkboxBonusHandler}
                    /> */}
                    <label className="form-check-label">Bonus(y)</label>
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
                      placeholder="0"
                    />
                    {/* ) : null} */}
                    {errors.bonusAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Housing amount{yearlyCheck ? "(y)" : ""}</label>
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
                      placeholder="0"
                    />
                    {errors.housingAmount && (
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
                    <label className="form-check-label">
                      Providient Fund(y)
                    </label>
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
                      placeholder="0"
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
                    <label>Medical amount{yearlyCheck ? "(y)" : ""}</label>
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
                      placeholder="0"
                    />
                    {errors.medicalAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Others{yearlyCheck ? "(y)" : ""}</label>
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
                      placeholder="0"
                    />
                    {errors.othersAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Conveyance{yearlyCheck ? "(y)" : ""}</label>
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
                      placeholder="0"
                    />

                    {errors.conveyanceAmount && (
                      <span className="text-warning">
                        Must Be Positive Number
                      </span>
                    )}
                  </div>

                  {!yearlyCheck && (
                    <div className="form-group">
                      <label>Number Of month</label>
                      <select
                        className="form-control"
                        type="number"
                        {...register("pvMonths")}
                        defaultValue={12}
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
                        <option value={12}>12</option>
                      </select>
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
           
          </div>
        </div>

      </div>
    </>
  );
};
