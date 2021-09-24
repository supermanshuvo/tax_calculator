import { taxConfig } from "./configData.js";

export const calculatePayableTax = (totalTaxableIncome, category) => {
  let taxArray = taxConfig.taxRules.general;
  if (category === "disabled") taxArray = taxConfig.taxRules.disabled;
  else if (category === "oldAge") taxArray = taxConfig.taxRules.oldAge;
  else if (category === "freedomFighters")
    taxArray = taxConfig.taxRules.freedomFighters;
  let totalPayable = 0;let rate=0;

  for(let cnt=0;cnt<=4;cnt++){
    let currentAmount = Math.min(taxArray[cnt], totalTaxableIncome)
    totalPayable = totalPayable + (currentAmount* rate)/ 100.0;
    rate=rate+5;
    totalTaxableIncome=totalTaxableIncome-currentAmount
    //console.log(' totaltaxable  '+Math.min(totalTaxableIncome,taxArray[cnt]))
  }
  totalPayable = totalPayable + (totalTaxableIncome * 25) / 100.0;
  //console.log(' totalPayable call ', totalPayable)
  return totalPayable;
};
