import { taxConfig } from "./configData.js";

export const calculatePayableTax = (totalTaxableIncome, category) => {
  let taxArray = taxConfig.taxRules.others;
  if (category === "disabled") taxArray = taxConfig.taxRules.disabled;
  else if (category === "man") taxArray = taxConfig.taxRules.male;
  else if (category === "freedomFighters")
    taxArray = taxConfig.taxRules.freedomFighters;
  let totalPayable = 0;
  let counter = 0;
  let rate = 0;
  while (totalTaxableIncome) {
    if (counter === 5) break;
    if (totalTaxableIncome <= taxArray[counter]) {
      totalPayable = totalPayable + (totalTaxableIncome * rate) / 100.0;
      //console.log(`counter ${counter} rate ${rate} totalTaxableIncome ${totalTaxableIncome} totalPayable ${totalPayable}`)
      return totalPayable;
    } else {
      totalPayable = totalPayable + (taxArray[counter] * rate) / 100.0;
    }
    totalTaxableIncome = totalTaxableIncome - taxArray[counter];
    //console.log(`counter ${counter} rate ${rate} totalTaxableIncome ${totalTaxableIncome} totalPayable ${totalPayable}`)
    counter = counter + 1;
    rate = rate + 5;
  }
  totalPayable = totalPayable + (totalTaxableIncome * 25) / 100.0;
  return totalPayable;
};
