export const taxConfig ={
male:[300000,100000,300000,400000,500000,99999999],
others:[350000,100000,300000,400000,500000,99999999],
lessAmount:{
  maxHousing:300000,
  maxHousingPercentage:50,
  maxMedical:120000,
  maxMedicalPercentage:10,
  maxConveyance:30000,
},
zone:{
  cityCorporation:5000,
  otherCity:4000,
  restCountry:3000
},
config:{
  configureC44 : 1000000,ConfigureC45 : 3000000,ConfigureC46 : 250000,
  ConfigureC49 : 250000,ConfigureC50 : 500000,ConfigureH44 : 15,ConfigureH46 : 15,
  ConfigureH47 : 12,ConfigureH49 : 15,ConfigureH50 : 12,ConfigureH51 : 10,
  maxInvestTaxExemption:25, maxAllowedInvesment:15000000
}
}


export const calculatePayableTax = (totalTaxableIncome,category) => {
    let taxArray = [350000, 100000, 300000, 400000, 500000];
    let totalPayable = 0;
    let counter = 0;
    let rate = 0;
    if (category === "disabled") taxArray[0] = 400000;
    if (category === "man") taxArray[0] = 300000;
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