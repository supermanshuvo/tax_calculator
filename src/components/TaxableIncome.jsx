import React from 'react'
import { useReducer,useCallback,useEffect,useState} from "react"
import { useForm } from "react-hook-form";
import {taxConfig} from ".././configData.js";

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
                                        <p className="text-center">{formBasic*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableBasic}</p>
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
                                        of basic or less of {taxConfig.lessAmount.maxHousing}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formHousing*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{Math.min(housingLess,formHousing*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableHousing}</p>
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
                                        <p className="text-center">less of {taxConfig.lessAmount.maxConveyance}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formConveyance*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{Math.min(conveyanceLesss ,formConveyance*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableConveyance}</p>
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
                                        of basic or less of {taxConfig.lessAmount.maxMedical}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formMedical*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{Math.min(medicalLesss,formMedical*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableMedical}</p>
                                    </td>
                                </tr>
                                ):null}
                                
                                {formBonus>0?
                                (
                                <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Bonus
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center"></p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formBonus}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formBonus}</p>
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
                                        <p className="text-center">{formProvFund}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formProvFund}</p>
                                    </td>
                                </tr>
                                )
                                :(null)}
                                

                                <tr>
                                    <th colSpan={4}>Total Taxable Income</th>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{totalTaxableIncome}</p>
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
                                        <p className="text-center">{formBasic*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableBasic}</p>
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
                                        of basic or less of {taxConfig.lessAmount.maxHousing}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formHousing*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{Math.min(housingLess,formHousing*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableHousing}</p>
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
                                        <p className="text-center">less of {taxConfig.lessAmount.maxConveyance}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formConveyance*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{Math.min(conveyanceLesss ,formConveyance*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableConveyance}</p>
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
                                        of basic or less of {taxConfig.lessAmount.maxMedical}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formMedical*formPvMonths}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{Math.min(medicalLesss,formMedical*formPvMonths)}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{taxableMedical}</p>
                                    </td>
                                </tr>
                                ):null}
                                {formBonus>0?
                                (
                                <tr>
                                    <td className="withoutInputFields td_of_charts">
                                        Bonus
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center"></p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formBonus}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formBonus}</p>
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
                                        <p className="text-center">{formProvFund}</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">0</p>
                                    </td>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{formProvFund}</p>
                                    </td>
                                </tr>
                                )
                                :(null)}
                                

                                <tr>
                                    <th colSpan={4}>Total Taxable Income</th>
                                    <td className="withoutInputFields">
                                        <p className="text-center">{totalTaxableIncome}</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                {/*st */}
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
{/* 

                    <div className="d-flex justify-content-between ">
                        
                    </div> */}

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
                {/*st */}
            </div>
            )}

            
    </div>
       
    )
}

export default TaxableIncome