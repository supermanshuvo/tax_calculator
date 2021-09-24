import React, { useState } from "react";
import { taxConfig } from ".././configData.js";

function TaxableIncome({
  title,
  active,
  setActive,
  formBasic,
  formHousing,
  formMedical,
  formConveyance,
  formPvMonths,
  formBonus,
  formProvFund,
  totalTaxableIncome,
  housingLess,
  medicalLesss,
  conveyanceLesss,
  taxableBasic,
  taxableHousing,
  taxableMedical,
  taxableConveyance,
}) {
  //formBasic, formHousing, formMedical,formConveyance,formPvMonths, formBonus,formProvFund

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
  });
  //const [show, setShow] = useState(false);

  return (
    <div className=" accordion_tab" >
      <div className="accordion" onClick={() => setActive(title)}>
        <p className="All_Headings" >
          Taxable Income
        </p>
      </div>
      <div className={(active===title? "show":"")+" accordionContent row "}>
        <div className="table-responsive">
          <table className="table table-hover table-bordered border-dark ">
            {/* {/ All headings /} */}
            <thead>
              <tr className="total_of_IncomeDetails">
                <th scope="col" className="text-center">
                  Item
                </th>
                <th scope="col" className="text-center">
                  Tax Rule
                </th>
                <th scope="col" className="text-center">
                  YearlyAmount({formPvMonths})
                </th>
                <th scope="col" className="text-center">
                  Less Amount
                </th>
                <th scope="col" className="text-center">
                  Taxable Income
                </th>
              </tr>
            </thead>

            <tbody>
              {/* {/Basic/} */}
              {formBasic ? (
                <tr>
                  <td className="withoutInputFields td_of_charts">Basic</td>
                  <td className="withoutInputFields">
                    <p className="text-center">100% Payable</p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(formBasic * formPvMonths)}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">0</p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">{format.format(taxableBasic)}</p>
                  </td>
                </tr>
              ) : null}

              {/* {/ Housing /} */}
              {formHousing ? (
                <tr>
                  <td className="withoutInputFields td_of_charts">Housing</td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {taxConfig.lessAmount.maxHousingPercentage}% of basic or
                      less of {format.format(taxConfig.lessAmount.maxHousing)}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(formHousing * formPvMonths)}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(
                        Math.min(housingLess, formHousing * formPvMonths)
                      )}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(taxableHousing)}
                    </p>
                  </td>
                </tr>
              ) : null}

              {/* {/ Conveyance /} */}
              {formConveyance ? (
                <tr>
                  <td className="withoutInputFields td_of_charts">
                    conveyance
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      less of{" "}
                      {format.format(taxConfig.lessAmount.maxConveyance)}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(formConveyance * formPvMonths)}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(
                        Math.min(conveyanceLesss, formConveyance * formPvMonths)
                      )}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(taxableConveyance)}
                    </p>
                  </td>
                </tr>
              ) : null}

              {/* {/Medical/} */}
              {formMedical ? (
                <tr>
                  <td className="withoutInputFields td_of_charts">Medical</td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {taxConfig.lessAmount.maxMedicalPercentage}% of basic or
                      less of {format.format(taxConfig.lessAmount.maxMedical)}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(formMedical * formPvMonths)}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(
                        Math.min(medicalLesss, formMedical * formPvMonths)
                      )}
                    </p>
                  </td>
                  <td className="withoutInputFields">
                    <p className="text-center">
                      {format.format(taxableMedical)}
                    </p>
                  </td>
                </tr>
              ) : null}

              {formBonus ? (
                <tr>
                  <td className="withoutInputFields td_of_charts">Bonus</td>
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
              ) : null}
              {formProvFund ? (
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
              ) : null}

              <tr>
                <th colSpan={4}>Total Taxable Income</th>
                <td className="withoutInputFields">
                  <p className="text-center">
                    {format.format(totalTaxableIncome)}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaxableIncome;
