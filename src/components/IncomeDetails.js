import { useReducer,useCallback,useEffect,useState} from "react"
import { useForm } from "react-hook-form";

export const InComeDetails = (props)=>{

    const inComeDetailsInit = {
        basicmAmount:0, basiclAmount:0 ,
        housingmAmount:0, housinglAmount:0,
        medicalmAmount:0, medicallAmount:0,
        conveyancemAmount:0, conveyancelAmount:0,
        livingmAmount:0, livinglAmount:0,
        providentFundyAmount:0, providentFundlAmount:0,
        bonusyAmount:0, bonuslAmount:0,
        specialAmountmAmount:0, specialAmountlAmount:0,
        othersmAmount:0,otherslAmount:0,
    }
    const reducerFunc = (state,newState)=>({...state,...newState})
    const [totalTaxableIncome,setTotalTaxableIncome]=useState(0)
    const {handleSubmit,register} = useForm(); 

    const [inComeDetailsState,setIncomeDetails] = useReducer(reducerFunc,inComeDetailsInit)
    const specialYoccurrance=6,othersYoccurrance=2

    const calculateTaxable = (mAmount,lAmount, yOccurrance=12) =>{
         const value = (mAmount*yOccurrance-lAmount)>0? mAmount*yOccurrance-lAmount:0;
         return value;
    }

   const calculateTaxableIncome=()=>{
      const totalTaxable = (
        calculateTaxable(inComeDetailsState.basicmAmount,inComeDetailsState.basiclAmount)+
        calculateTaxable(inComeDetailsState.housingmAmount,inComeDetailsState.housinglAmount)+
        calculateTaxable(inComeDetailsState.medicalmAmount,inComeDetailsState.medicallAmount)+
        calculateTaxable(inComeDetailsState.conveyancemAmount,inComeDetailsState.conveyancelAmount)+
        calculateTaxable(inComeDetailsState.livingmAmount,inComeDetailsState.livinglAmount)+
        calculateTaxable(inComeDetailsState.providentFundyAmount,inComeDetailsState.providentFundlAmount,1)+
        calculateTaxable(inComeDetailsState.bonusyAmount,inComeDetailsState.bonuslAmount,1)+
        calculateTaxable(inComeDetailsState.specialAmountmAmount,inComeDetailsState.specialAmountlAmount,specialYoccurrance)+
        calculateTaxable(inComeDetailsState.othersmAmount,inComeDetailsState.otherslAmount,othersYoccurrance))
        return totalTaxable;
}

    useEffect(()=>{
        setTotalTaxableIncome(calculateTaxableIncome())
    })

    const handleChange= (evnt) =>{
        const name = evnt.target.name;
        const newValue = Number(evnt.target.value);
        setIncomeDetails({[name]:newValue});
        //calculateTaxableIncome()
    }
    const handleFormData=(formData)=>{
        const provFund = inComeDetailsState.providentFundyAmount-inComeDetailsState.providentFundlAmount
        props.handleStates(formData,totalTaxableIncome,provFund,true)
        //alert(`${formData.department} taxable: ${totalTaxableIncome}`)
      }


    return(
        <>
        <div className="container fields">
            <p className="All_Headings">Employee Details</p>
            <form onSubmit={handleSubmit(handleFormData)}>
                <div className="row">
                    {/* left-side-fields starts */}
                    <div className="col-lg-6 col-md-12 table-left">
                    <div className="form-group">
                        <label className="levelsOfEmployeeDetails">
                            <span>*</span> Enter Employee Name
                        </label>
                        <input {...register('employeeName')} type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label className="levelsOfEmployeeDetails">
                        <span>*</span> Employee Code
                        </label>
                        <input {...register('employeeCode')} type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label className="levelsOfEmployeeDetails">
                        <span>*</span> Location
                        </label>
                        <input {...register('location')} type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label className="levelsOfEmployeeDetails">
                        <span>*</span> Department
                        </label>
                        <input {...register('department')} type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label className="levelsOfEmployeeDetails">
                        <span>*</span> Join Date
                        </label>
                        <input {...register('joinDate')} type="date" className="form-control" required />
                    </div>
                </div>

                    {/* left-side-fields ends */}

                    {/* right-side-fields starts
                    */}
                <div className="col-lg-6 col-md-12 table-right">
                    <div className="form-group">
                        <label className="levelsOfEmployeeDetails">Branch</label>
                        <input {...register('branch')}  type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label className="levelsOfEmployeeDetails">
                        <span>*</span> Designation
                        </label>
                        <input type="text" {...register('designation')}  className="form-control" required />
                    </div>
                    <div>
                        <label className="levelsOfEmployeeDetails">Eligible for</label>
                        <select {...register('eligibility')} 
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
                        <select {...register('gender')} 
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
                    <select {...register('provMonths')} 
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
            <h2>Income Details: </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">M. Amount</th>
                    <th scope="col">Y.Amount</th>
                    <th scope="col">L.Amount</th>
                    <th scope="col">Taxable Income</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Basic Pay</th>
                    <td><input  name="basicmAmount"
                     value={inComeDetailsState.basicmAmount}
                     onChange={handleChange}
                     /></td>
                    <td><input readOnly value={inComeDetailsState.basicmAmount*12}/></td>
                    <td><input onChange={handleChange} name="basiclAmount"
                     value={inComeDetailsState.basiclAmount}/></td>
                    <td><input readOnly 
                    value={calculateTaxable(inComeDetailsState.basicmAmount,
                        inComeDetailsState.basiclAmount)} /></td>
                    </tr>
                    <tr>
                    <th scope="row">Housing</th>
                    <td><input onChange={handleChange} name="housingmAmount"
                     value={inComeDetailsState.housingmAmount}/></td>
                    <td><input readOnly value={inComeDetailsState.housingmAmount*12}/></td>
                    <td><input onChange={handleChange} name="housinglAmount"
                     value={inComeDetailsState.housinglAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.housingmAmount,
                        inComeDetailsState.housinglAmount)}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Medical</th>
                    <td><input onChange={handleChange} name="medicalmAmount"
                     value={inComeDetailsState.medicalmAmount}/></td>
                    <td><input readOnly value={inComeDetailsState.medicalmAmount*12}/></td>
                    <td><input onChange={handleChange} name="medicallAmount"
                     value={inComeDetailsState.medicallAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.medicalmAmount,
                        inComeDetailsState.medicallAmount)}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Conveyance</th>
                    <td><input onChange={handleChange} name="conveyancemAmount"
                     value={inComeDetailsState.conveyancemAmount}/></td>
                    <td><input readOnly value={inComeDetailsState.conveyancemAmount*12}/></td>
                    <td><input onChange={handleChange} name="conveyancelAmount"
                     value={inComeDetailsState.conveyancelAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.conveyancemAmount,
                        inComeDetailsState.conveyancelAmount)}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Living</th>
                    <td><input onChange={handleChange} name="livingmAmount"
                     value={inComeDetailsState.livingmAmount}/></td>
                    <td><input readOnly value={inComeDetailsState.livingmAmount*12}/></td>
                    <td><input onChange={handleChange} name="livinglAmount"
                     value={inComeDetailsState.livinglAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.livingmAmount,
                        inComeDetailsState.livinglAmount)}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Provident Fund</th>
                    <td><input name="providentFundmAmount"/></td>
                    <td><input onChange={handleChange} name='providentFundyAmount' value={inComeDetailsState.providentFundyAmount}/></td>
                    <td><input onChange={handleChange} name="providentFundlAmount"
                     value={inComeDetailsState.providentFundlAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.providentFundyAmount,
                        inComeDetailsState.providentFundlAmount,1)}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Bonus</th>
                    <td><input /></td>
                    <td><input onChange={handleChange} name="bonusyAmount"
                     value={inComeDetailsState.bonusyAmount}/></td>
                    <td><input onChange={handleChange} name="bonuslAmount"
                     value={inComeDetailsState.bonuslAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.bonusyAmount,
                        inComeDetailsState.bonuslAmount,1)}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Special Amount</th>
                    <td><input onChange={handleChange} name="specialAmountmAmount"
                     value={inComeDetailsState.specialAmountmAmount}/></td>
                    <td><input readOnly value={inComeDetailsState.specialAmountmAmount*specialYoccurrance}/></td>
                    <td><input onChange={handleChange} name="specialAmountlAmount"
                     value={inComeDetailsState.specialAmountlAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.specialAmountmAmount,
                        inComeDetailsState.specialAmountlAmount,specialYoccurrance)}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Others</th>
                    <td><input onChange={handleChange} name="othersmAmount"
                     value={inComeDetailsState.othersmAmount}/></td>
                    <td><input readOnly value={inComeDetailsState.othersmAmount*othersYoccurrance}/></td>
                    <td><input onChange={handleChange} name="otherslAmount"
                     value={inComeDetailsState.otherslAmount}/></td>
                    <td><input readOnly value={calculateTaxable(inComeDetailsState.othersmAmount,
                        inComeDetailsState.otherslAmount,othersYoccurrance)}/></td>
                    </tr>
                </tbody>
                </table>
                <h3>Total Taxable Income : {totalTaxableIncome}</h3>
                <button type='submit' value='Submit'>Submit</button>
            </form>
        </div>
        </>
    )
}