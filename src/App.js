import ReactDOM from "react-dom";
import React, { useState,useRef } from 'react'
import './App.css';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {InComeDetails} from './components/IncomeDetails.js';
import { Switch, Route, Redirect } from "react-router-dom";
import TotalTax  from './components/TotalTax.js';
import InvestmentAllowance from "./components/InvestMentAllowence.js";
import Footer from "./components/Footer";
import EmployeeDetailsAsOutputTable from './components/EmployeeDetailsAsOutputTable.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import taxConfig from "./configData.js";

function App() {
  const [formSubmitted,setFormSubmitted]=useState(false)
  const [category,setCategory]=useState()
  const [formData,setUserData]=useState({})
  const captureRef = useRef(null);
  const [totalTaxableIncome,setTotalTaxableIncome] = useState(0);
  const [totalpayable,setTotalpayable] = useState(0)

  const calculatePayableTax = (totalTaxableIncome,category) => {
    let taxArray = [300000, 100000, 300000, 400000, 500000];
    let totalPayable = 0;
    let counter = 0;
    let rate = 0;
    if (category === "disabled") taxArray[0] = 400000;
    if (category === "oldage") taxArray[0] = 350000;
    if (category === "female") taxArray[0] = 350000;
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

  const printDocument =() =>{
    const input = captureRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4', false);
        pdf.addImage(imgData, 'PNG', 0, 0, 590, 0, undefined, false);
        pdf.setFontSize(6)
        pdf.text(240,640,'©2021 VivaSoft, All right reserved.')
        pdf.output('dataurlnewwindow');
        pdf.save("TaxReport.pdf");
      })
    ;
  }
  const calculateTaxable = (mAmount, lAmount, yOccurrance = 12) => {
    const value = mAmount * yOccurrance - lAmount > 0 ? mAmount * yOccurrance - lAmount : 0;
    return value;
  };

  const calculateTaxableIncome = (formData) => {
    const totalTaxable =
      calculateTaxable(formData.basicAmount,formData.basicLAmount) +
      calculateTaxable(formData.housingAmount,formData.housingLAmount) +
      calculateTaxable(formData.medicalAmount,formData.medicalLAmount) +
      calculateTaxable(formData.conveyanceAmount,formData.conveyanceLAmount,1) +
      calculateTaxable(formData.livingmAmount,formData.livinglAmount) +
      calculateTaxable(formData.pfAmountt,formData.pfLAmount,1) +
      calculateTaxable(formData.bonusAmount,formData.bonusLAmount,1) +
      calculateTaxable(formData.specialAmount,formData.specialLAmount,1) +
      calculateTaxable(formData.othersAmount,formData.othersLAmount,1);   
      return totalTaxable;
    };

  
    const handleSubmit = (formData, submitted,category)=>{
      setUserData(formData);
      setCategory(category);
      const totalTaxable = calculateTaxableIncome(formData)
      setTotalTaxableIncome(totalTaxable);
      setTotalpayable(calculatePayableTax(totalTaxable,category))
      setFormSubmitted(submitted);
    }  
  
    

  return (
    <>
      <Header />
      <Navbar />

      {
      ! formSubmitted?
        (
        <Switch>
          <Route path="/man">
              <InComeDetails category="male" firstAmount ={300000}  handleStates={(formData,
            submitted,category)=>handleSubmit(formData,submitted,category)} /> 
          </Route>
          <Route path="/woman">
          <InComeDetails category="female" firstAmount ={350000}  handleStates={(formData,
            submitted,category)=>handleSubmit(formData,submitted,category)} /> 
          </Route>
          <Route path="/disabled">
          <InComeDetails category="disabled" firstAmount ={400000} handleStates={(formData,
            submitted,category)=>handleSubmit(formData,submitted,category)} /> 
          </Route>
          <Route path="/oldage">
          <InComeDetails category="oldage" firstAmount ={350000}  handleStates={(formData,
            submitted,category)=>handleSubmit(formData,
              submitted,category)} /> 
          </Route>
        </Switch>
        ):
        (
          <>
          <div ref={captureRef}>
          <TotalTax gender={category} totalTaxableIncome ={totalTaxableIncome}/>
          <InvestmentAllowance providentFund={formData.pfAmount-formData.pfLAmount} maxInvestTaxExemption={25} maxAllowedInvesment={15000000} 
            totalTaxIncome={totalTaxableIncome} totalPayableTax={totalpayable}
             provMonth={parseInt(formData.pvMonths)} />   
          </div>
          <button onClick={printDocument}>Download Report</button> 
          </>
        )
    }
      
    <Footer/>
    </>
  );
}

export default App;
