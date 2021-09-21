import React, { useLayoutEffect } from 'react'
import { useReducer,useRef,useEffect,useState} from "react"
import { useForm } from "react-hook-form";
import {taxConfig} from ".././configData.js";
//import NumberFormat from "react-number-format";

function TaxableIncome( 
    {formData, handleStates,formBasic, formHousing, 
        formMedical,formConveyance,formPvMonths, formBonus,formProvFund,
        totalTaxableIncome, housingLess,medicalLesss, 
        conveyanceLesss,taxableBasic, taxableHousing,taxableMedical,
        reportPhase, taxableConveyance}) {   
            //formBasic, formHousing, formMedical,formConveyance,formPvMonths, formBonus,formProvFund
    
    const inputFieldInit = {bonus:false,provFund:false}
    const reducerFunc = (state, newState) => ({ ...state, ...newState });
    const [inputField, setInputField] = useReducer(reducerFunc,inputFieldInit);
    const yearlyBasic = useRef(0)
    const { register,handleSubmit, formState:{errors} } = useForm();

    var format = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0,
    });

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
      
        <div className="container">
        <p className="All_Headings">Taxable Income</p>
            {reportPhase===true?(
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered border-dark ">
                            {/* {/ All headings /} */}
                            <thead>
                                <tr className="total_of_IncomeDetails">
                                    <th scope="col" className="text-center">Item</th>
                                    <th scope="col" className="text-center">Tax Rule</th>
                                    <th scope="col" className="text-center">YearlyAmount({formPvMonths})</th>
                                    <th scope="col" className="text-center">Less Amount</th>
                                    <th scope="col" className="text-center">
                                        Taxable Income
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* {/Basic/} */}
                                {formBasic?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Basic
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">100% Payable</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">
                                        {format.format(formBasic*formPvMonths)}
                                        </p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">
                                            {format.format(taxableBasic)}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                
                                {/* {/ Housing /} */}
                                {formHousing?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Housing
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxConfig.lessAmount.maxHousingPercentage}% 
                                        of basic or less of {format.format(taxConfig.lessAmount.maxHousing)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formHousing*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">
                                            {format.format(Math.min(housingLess,formHousing*formPvMonths))}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableHousing)}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                {/* {/ Conveyance /} */}
                                {formConveyance?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        conveyance
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">less of {format.format(taxConfig.lessAmount.maxConveyance)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formConveyance*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(Math.min(conveyanceLesss ,formConveyance*formPvMonths))}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableConveyance)}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                {/* {/Medical/} */}
                                {formMedical?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Medical
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxConfig.lessAmount.maxMedicalPercentage}% 
                                        of basic or less of {format.format(taxConfig.lessAmount.maxMedical)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formMedical*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(Math.min(medicalLesss,formMedical*formPvMonths))}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableMedical)}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                {formBonus?
                                (
                                <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Bonus
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center"></p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formBonus)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formBonus)}</p>
                                    </td>
                                </tr>
                                )
                                :(null)}
                                {formProvFund?
                                (
                                <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        provedient fund
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center"></p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formProvFund)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formProvFund)}</p>
                                    </td>
                                </tr>
                                )
                                :(null)}
                                

                                <tr>
                                    <th colSpan={4}>Total Taxable Income</th>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(totalTaxableIncome)}</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            ):
            (
                <div className="row">
                <div className="col-8">
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered border-dark ">
                            {/* {/ All headings /} */}
                            <thead>
                                <tr className="total_of_IncomeDetails">
                                    <th scope="col" className="text-center">Item</th>
                                    <th scope="col" className="text-center">Tax Rule</th>
                                    <th scope="col" className="text-center">YearlyAmount({formPvMonths})</th>
                                    <th scope="col" className="text-center">Less Amount</th>
                                    <th scope="col" className="text-center">
                                        Taxable Income
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* {/Basic/} */}
                                {formBasic?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Basic
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">100% Payable</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableBasic)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableBasic)}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                
                                {/* {/ Housing /} */}
                                {formHousing?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Housing
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxConfig.lessAmount.maxHousingPercentage}% 
                                        of basic or less of {format.format(taxConfig.lessAmount.maxHousing)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formHousing*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(Math.min(housingLess,formHousing*formPvMonths))}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableHousing)}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                {/* {/ Conveyance /} */}
                                {formConveyance?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        conveyance
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">less of {format.format(taxConfig.lessAmount.maxConveyance)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formConveyance*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(Math.min(conveyanceLesss ,formConveyance*formPvMonths))}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableConveyance)}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                {/* {/Medical/} */}
                                {formMedical?(
                                    <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Medical
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxConfig.lessAmount.maxMedicalPercentage}% 
                                        of basic or less of {format.format(taxConfig.lessAmount.maxMedical)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formMedical*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(Math.min(medicalLesss,formMedical*formPvMonths))}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(taxableMedical)}</p>
                                    </td>
                                </tr>
                                ):null}
                                {formBonus?
                                (
                                <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Bonus
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center"></p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formBonus)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formBonus)}</p>
                                    </td>
                                </tr>
                                )
                                :(null)}
                                {formProvFund?
                                (
                                <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        provedient fund
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center"></p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formProvFund)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(formProvFund)}</p>
                                    </td>
                                </tr>
                                )
                                :(null)}
                                

                                <tr>
                                    <th colSpan={4}>Total Taxable Income</th>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{format.format(totalTaxableIncome)}</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                {/*st */}
                <div className="col-4 update_form">
                    <form onSubmit={handleSubmit(handleFormData)}>
                    {/* field-no : 1 */}
                    <div className="d-flex justify-content-between ">
                        <div className="form-group">
                            <label >Basic Amount</label>
                            <input required {...register("basicAmount",
                            {
                                min: {
                                value: 1,
                                message: 'Must Be Positive Number' 
                                // JS only: <p>error message</p> TS only support string
                            }}
                            )}
                                type="number"
                                className="form-control"
                                defaultValue={formData.basicAmount}/>
                            {errors.basicAmount && (<span className="text-warning">
                            Must Be Positive Number</span>)}    
                        </div>
                        <div className="form-group">
                            <label>Housing amount</label>
                            <input {...register("housingAmount",
                            {
                                min: {
                                  value: 0,
                                  message: 'Must Be Positive Number' 
                                  // JS only: <p>error message</p> TS only support string
                              }}
                              )}
                                type="number"
                                className="form-control"
                                id="exampleInputPassword1"
                                defaultValue={formData.housingAmount}/>
                            {errors.housingAmount && (<span className="text-warning">
                            Must Be Positive Number</span>)}    
                        </div>
                        
                    </div>

                    <div className="d-flex justify-content-between ">
                        <div className="form-group">
                            <label>Medical amount</label>
                            <input {...register("medicalAmount",
                            {
                                min: {
                                  value: 0,
                                  message: 'Must Be Positive Number' 
                                  // JS only: <p>error message</p> TS only support string
                              }}
                              )}
                                type="number"
                                className="form-control"
                                id="exampleInputPassword1"
                                defaultValue={formData.medicalAmount}
                            />
                            {errors.medicalAmount && (<span className="text-warning">
                            Must Be Positive Number</span>)}
                        </div>
                        <div className="form-group">
                            <label>
                                Conveyance
                            </label>
                            <input {...register("conveyanceAmount",
                            {
                                min: {
                                value: 0,
                                message: 'Must Be Positive Number' 
                                // JS only: <p>error message</p> TS only support string
                            }}
                            )}
                                type="number"
                                className="form-control"
                                defaultValue={formData.conveyanceAmount}/>
                            {errors.conveyanceAmount && (<span className="text-warning">
                            Must Be Positive Number</span>)}    
                        </div>
                    </div>

                    <div className="d-flex justify-content-between ">
                        <div className="form-check">
                            <input type="checkbox" name="bonus" onClick={checkboxBonusHandler} />
                            <label className="form-check-label" >
                                Bonus
                            </label>
                            {inputField.bonus? <input {...register("bonusAmount",
                            {
                                min: {
                                  value: 0,
                                  message: 'Must Be Positive Number' 
                                  // JS only: <p>error message</p> TS only support string
                              }}
                              )}
                            type="number" className="form-control" defaultValue={formData.bonusAmount}/>:null}
                            {errors.bonusAmount && (<span className="text-warning">
                            Must Be Positive Number</span>)}    
                        </div>

                        <div className="form-check">
                            <input type="checkbox" name="provFund" onClick={checkboxprovFundHandler} />
                            <label className="form-check-label" >
                                Provident Fund
                            </label>
                            {inputField.provFund? <input {...register("provFund",
                            {
                                min: {
                                  value: 0,
                                  message: 'Must Be Positive Number' 
                                  // JS only: <p>error message</p> TS only support string
                              }}
                              )}
                                type="number" className="form-control" defaultValue={formData.provFund}/>:null}
                            {errors.provFund && (<span className="text-warning">
                            Must Be Positive Number</span>)}
                        </div>
                    </div>

                    <div className="d-flex justify-content-between ">
                        <div className="form-group">
                            <label>provedient month</label>
                            <select className="form-control" type="number" 
                            {...register("pvMonths")}>
                                <option selected={1===formData.pvMonths} value={1}>1</option>
                                <option selected={2===formData.pvMonths} value={2}>2</option>
                                <option selected={3===formData.pvMonths} value={3}>3</option>
                                <option selected={4===formData.pvMonths} value={4}>4</option>
                                <option selected={5===formData.pvMonths} value={5}>5</option>
                                <option selected={6===formData.pvMonths} value={6}>6</option>
                                <option selected={7===formData.pvMonths} value={7}>7</option>
                                <option selected={8===formData.pvMonths} value={8}>8</option>
                                <option selected={9===formData.pvMonths} value={9}>9</option>
                                <option selected={10===formData.pvMonths} value={10}>10</option>
                                <option selected={11===formData.pvMonths} value={11}>11</option>
                                <option selected={12===formData.pvMonths} value={12}>12</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Choose Zone</label>
                            <select className="form-control" type="number" {...register("zone")}>
                            <option selected={'cityCorporation'===formData.zone} value='cityCorporation'
                                >Dhaka/Chattagram City</option>
                            <option selected={'otherCity'===formData.zone}
                                 value='otherCity'>Other City</option>
                            <option selected={'restCountry'===formData.zone} 
                                value='restCountry'>Rest of the Country</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                    </form>
                </div>
                {/*st */}
            </div>
            )}
    </div>
       
       
    )
}

export default TaxableIncome