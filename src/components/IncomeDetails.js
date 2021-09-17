import { useReducer,useCallback,useEffect,useState} from "react"
import { useForm } from "react-hook-form";

export const InComeDetails = (props) => {

  const inputFieldInit = {bonus:false,provFund:false}
  const reducerFunc = (state, newState) => ({ ...state, ...newState });
  const [inputField, setInputField] = useReducer(reducerFunc,inputFieldInit);
  
  const { handleSubmit, register } = useForm();

  const handleFormData = (formData) => {
    formData.basicAmount = Number(formData.basicAmount ) 
    formData.housingAmount = Number(formData.housingAmount) 
    formData.medicalAmount = Number(formData.medicalAmount ) 
    formData.conveyanceAmount = Number(formData.conveyanceAmount ) 
    formData.pvMonths= Number(formData.pvMonths)
    if(formData.bonusAmount === undefined)formData.bonusAmount= 0;
    if(formData.provFund === undefined)formData.provFund= 0;
    formData.bonusAmount=Number(formData.bonusAmount)
    formData.provFund=Number(formData.provFund)
    props.handleStates(formData, true);
  }

  const checkboxBonusHandler = ()=>{
    let prev = inputField.bonus;
    setInputField({bonus:!prev})
  }
  const checkboxprovFundHandler = ()=>{
    let prev = inputField.provFund;
    setInputField({provFund:!prev})
  }
      
return (
    <>
      <div className="container all_options_div mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-11">
              <form onSubmit={handleSubmit(handleFormData)}>
                {/* field-no : 1 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label >Basic Amount</label>
                    <input {...register("basicAmount")}
                      type="number"
                      className="form-control"
                      defaultValue={0}
                    />
                  </div>
                  <div className="form-group">
                    <label>provedient month</label>
                    <input {...register("pvMonths")}
                      type="number"
                      className="form-control"
                      defaultValue={12}
                    />
                  </div>
                </div>

                {/* field-no : 2 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Housing amount</label>
                    <input {...register("housingAmount")}
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      defaultValue={0}
                    />
                  </div>
                </div>

                {/* field-no : 3 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Medical amount</label>
                    <input {...register("medicalAmount")}
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      defaultValue={0}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>
                      Conveyance
                    </label>
                    <input {...register("conveyanceAmount")}
                      type="number"
                      className="form-control"
                      defaultValue={0}/>
                    </div>
                    </div>


                {/* field-no : 7 */}

                <div className="d-flex justify-content-between ">
                  <div className="form-check">
                  <input type="checkbox" name="bonus" onClick={checkboxBonusHandler} />
                    <label className="form-check-label" >
                      Bonus
                    </label>
                    {inputField.bonus? <input {...register("bonusAmount")}
                      type="number" className="form-control" defaultValue={0}/>:null}
                  </div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="form-check">
                  <input type="checkbox" name="provFund" onClick={checkboxprovFundHandler} />
                    <label className="form-check-label">
                      Providient Fund
                    </label>
                    {inputField.provFund? <input {...register("provFund")}
                      type="number" className="form-control" defaultValue={0} />:null}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-4 col-11">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">amount</th>
                    <th scope="col">Tax %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">first tk</th>
                    <td>{props.firstAmount}</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>0000</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>300000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>400000</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>500000</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>rest of all</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
