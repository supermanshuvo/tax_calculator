import { useReducer,useCallback,useEffect,useState} from "react"
import { useForm } from "react-hook-form";

export const UpdateIncomeDetails = ({formData,handleStates}) => {

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
    handleStates(formData, true);
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
    <div className="col-4">
        <form onSubmit={handleSubmit(handleFormData)}>
        {/* field-no : 1 */}
        <div className="d-flex justify-content-between ">
            <div className="form-group">
            <label >Basic Amount</label>
            <input {...register("basicAmount")}
                type="number"
                className="form-control"
                defaultValue={formData.basicAmount}
            />
            </div>
            <div className="form-group">
            <label>provedient month</label>
            <input {...register("pvMonths")}
                type="number"
                className="form-control"
                defaultValue={formData.pvMonths}
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
                defaultValue={formData.housingAmount}
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
                defaultValue={formData.medicalAmount}
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
                defaultValue={formData.conveyanceAmount}/>
            </div>
            </div>


        {/* field-no : 7 */}

        <div className="d-flex justify-content-between ">
            {formData.bonusAmount!==0?
            (
            <div className="form-group">
                <label>
                    Bonus
                </label>
                <input {...register("bonusAmount")}
                    type="number" className="form-control" defaultValue={formData.bonusAmount}/>
            </div>
            ):
            (
            <div className="form-check">
                <input type="checkbox" name="bonus" onClick={checkboxBonusHandler} />
                <label className="form-check-label" >
                    Bonus
                </label>
                {inputField.bonus? <input {...register("bonusAmount")}
                    type="number" className="form-control" defaultValue={formData.bonusAmount}/>:null}
            </div>

            )}
        </div>
        <div className="d-flex justify-content-between ">
            {formData.provFund!==0?
            (
            <div className="form-group">
                <label>
                    Provident Fund
                </label>
                <input {...register("provFund")}
                    type="number" className="form-control" defaultValue={formData.provFund}/>
            </div>
            ):
            (
            <div className="form-check">
                <input type="checkbox" name="provFund" onClick={checkboxprovFundHandler} />
                <label className="form-check-label" >
                    Provident Fund
                </label>
                {inputField.provFund? <input {...register("provFund")}
                    type="number" className="form-control" defaultValue={formData.provFund}/>:null}
            </div>

            )}
        </div>
        <button type="submit" className="btn btn-primary">
            Update
        </button>
        </form>
    </div>
  );
}

