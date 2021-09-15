import React from 'react'
import {taxConfig} from ".././configData.js";

function TaxableIncome(
    {formBasic, formHousing, formMedical,formConveyance,formPvMonths, formBonus,formProvFund,
        totalTaxableIncome, housingLess,medicalLesss, 
        conveyanceLesss,taxableBasic, taxableHousing,taxableMedical, taxableConveyance}) {   
            //formBasic, formHousing, formMedical,formConveyance,formPvMonths, formBonus,formProvFund
    
    return (
      
    <div className="container">
        <p className="All_Headings">Taxable Income</p>
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
                                {/* {/Medical/} */}
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
                                {/* {/ Housing /} */}
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
                                {/* {/ Housing /} */}
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
            </div>
    </div>
       
    )
}

export default TaxableIncome