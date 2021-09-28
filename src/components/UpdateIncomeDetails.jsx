import { useReducer,useState} from "react";
import { useForm } from "react-hook-form";

export const UpdateIncomeDetails = ({ 
    yearlyCheck,
    formData, 
    handleStates,
    updateZone,
    updateCategory, }) => 
    {
  const inputFieldInit = { bonus: false, provFund: false };
  const reducerFunc = (state, newState) => ({ ...state, ...newState });
  const [inputField, setInputField] = useReducer(reducerFunc, inputFieldInit);
  const [yearlyCheckNow,setYearlyCheckNow] = useState(yearlyCheck)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const checkboxBonusHandler = () => {
    let prev = inputField.bonus;
    setInputField({ bonus: !prev });
  };
  const checkboxprovFundHandler = () => {
    let prev = inputField.provFund;
    setInputField({ provFund: !prev });
  };

  const changeZoon=(ev)=>{
    //console.log(ev.target.value)
    updateZone(ev.target.value)
  }
  
  const changeCategory=(ev)=>{
    //console.log(ev.target.value)
    updateCategory(ev.target.value)
  }
  const handleFormData = (formData) => {
    formData.basicAmount = Number(formData.basicAmount);
    formData.housingAmount = Number(formData.housingAmount);
    formData.medicalAmount = Number(formData.medicalAmount);
    formData.conveyanceAmount = Number(formData.conveyanceAmount);
    formData.othersAmount = Number(formData.othersAmount);
    formData.yearlyCheck=yearlyCheckNow;
    formData.pvMonths = Number(formData.pvMonths);
    if(yearlyCheckNow == true)formData.pvMonths=1;
    if (formData.bonusAmount === undefined) formData.bonusAmount = 0;
    if (formData.provFund === undefined) formData.provFund = 0;
    formData.bonusAmount = Number(formData.bonusAmount);
    formData.provFund = Number(formData.provFund);
    handleStates(formData, true);
  };



  return (
      <div className=" update_form">
        <div>
          <h3>Update Details</h3>
        </div>
        <form onSubmit={handleSubmit(handleFormData)}>
        {/* field-no : 1 */}
        <div className="d-flex justify-content-between ">
          <div className="form-check">
            <input className="form-check-input" type="checkbox"  defaultChecked={yearlyCheckNow}
            value="" onClick={()=>setYearlyCheckNow(!yearlyCheckNow)} id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Calculate Your Tax Based On Yearly Amount
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-group">
            <label>Category</label>
            <select
              className="form-control select_field"
              type="number"
              {...register("category")}
              onChange={changeCategory}
            >
              <option
                value="general"
                selected={"general" === formData.category}
              >
                General
              </option>
              <option value="oldAge" selected={"oldAge" === formData.category}>
                Female/OldAge(65+)
              </option>
              <option
                value="freedomFighters"
                selected={"freedomFighters" === formData.category}
              >
                Gazetted Freedom Fighters
              </option>
              <option
                value="disabled"
                selected={"disabled" === formData.category}
              >
                Disabled
              </option>
            </select>
          </div>
          <div className="form-group select_field">
            <label>Zone</label>
            <select
              className="form-control select_field"
              type="number"
              {...register("zone")}
              onChange={changeZoon}
            >
              <option
                selected={"cityCorporation" === formData.zone}
                value="cityCorporation"
              >
                Dhaka/Chattagram City
              </option>
              <option
                selected={"otherCity" === formData.zone}
                value="otherCity"
              >
                Other City
              </option>
              <option
                selected={"restCountry" === formData.zone}
                value="restCountry"
              >
                Rest of the Country
              </option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-between ">
          <div className="form-group">
            <label>Basic Amount{yearlyCheckNow?'(y)':''}</label>
            <input
              required
              {...register("basicAmount", {
                min: {
                  value: 1,
                  message: "Must Be Positive Number",
                  // JS only: <p>error message</p> TS only support string
                },
              })}
              type="string"
              className="form-control"
              defaultValue={formData.basicAmount}
            />
            {errors.basicAmount && (
              <span className="text-warning">Must Be Positive Number</span>
            )}
          </div>
          <div className="form-group">
            <label>Housing amount{yearlyCheckNow?'(y)':''}</label>
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
              defaultValue={formData.housingAmount}
            />
            {errors.housingAmount && (
              <span className="text-warning">Must Be Positive Number</span>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between ">
          <div className="form-group">
            <label>Medical amount{yearlyCheckNow?'(y)':''}</label>
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
              defaultValue={formData.medicalAmount}
            />
            {errors.medicalAmount && (
              <span className="text-warning">Must Be Positive Number</span>
            )}
          </div>
          <div className="form-group">
            <label>Conveyance {yearlyCheckNow?'(y)':''}</label>
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
              defaultValue={formData.conveyanceAmount}
            />
            {errors.conveyanceAmount && (
              <span className="text-warning">Must Be Positive Number</span>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between ">
          <div className="form-check form-group">
            {/* <input
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
                defaultValue={formData.bonusAmount}
              />
            {/* ) : null} */}
            {errors.bonusAmount && (
              <span className="text-warning">Must Be Positive Number</span>
            )}
          </div>

          <div className="form-check form-group">
            {/* <input
              type="checkbox"
              name="provFund"
              onClick={checkboxprovFundHandler}
            /> */}
            <label className="form-check-label">Provident Fund(y)</label>
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
                defaultValue={formData.provFund}
              />
            {/* ) : null} */}
            {errors.provFund && (
              <span className="text-warning">Must Be Positive Number</span>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between ">
          <div className="form-group">
            <label>Others{yearlyCheckNow?'(y)':''}</label>
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
              defaultValue={formData.othersAmount}
            />
            {errors.othersAmount && (
              <span className="text-warning">Must Be Positive Number</span>
            )}
          </div>
          {!yearlyCheckNow &&
          <div className="form-group">
            <label>Num. Of Months</label>
            <select
              className="form-control"
              type="number"
              {...register("pvMonths")}
              //onChange={changeMonths}
            >
              <option selected={1 === formData.pvMonths} value={1}>
                1
              </option>
              <option selected={2 === formData.pvMonths} value={2}>
                2
              </option>
              <option selected={3 === formData.pvMonths} value={3}>
                3
              </option>
              <option selected={4 === formData.pvMonths} value={4}>
                4
              </option>
              <option selected={5 === formData.pvMonths} value={5}>
                5
              </option>
              <option selected={6 === formData.pvMonths} value={6}>
                6
              </option>
              <option selected={7 === formData.pvMonths} value={7}>
                7
              </option>
              <option selected={8 === formData.pvMonths} value={8}>
                8
              </option>
              <option selected={9 === formData.pvMonths} value={9}>
                9
              </option>
              <option selected={10 === formData.pvMonths} value={10}>
                10
              </option>
              <option selected={11 === formData.pvMonths} value={11}>
                11
              </option>
              <option selected={12 === formData.pvMonths} value={12}>
                12
              </option>
            </select>
          </div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
      </div>
  );
};
