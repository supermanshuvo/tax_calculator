import ReactDOM from "react-dom";
import React, { useState,useRef } from 'react'
import './App.css';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {InComeDetails} from './components/IncomeDetails.js';
import TotalTax  from './components/TotalTax.js';
import InvestmentAllowance from "./components/InvestMentAllowence.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import EmployeeDetailsAsOutputTable from './components/EmployeeDetailsAsOutputTable.js';

const options = {
  orientation: 'portrait',
  unit: 'in',
  format: [14,12]
};

function App() {
  const [formSubmitted,setFormSubmitted]=useState(false)
  const [totalTaxableIncome,setTotalTaxableIncome]=useState(0)
  const [userData,setUserData]=useState({})
  const [provFund,setProvFund] = useState(0)
  const [totalpayable,setTotalpayable] = useState(0)
  const captureRef = useRef(null);

  const calculatePayableTax = (totalTaxableIncome=700000,gender='male')=>{
    let taxArray =[300000,100000,300000,400000,500000]
    let totalPayable=0;
    let counter=0;let rate=0
    if(gender==='female')taxArray[0]=350000;
    while(totalTaxableIncome){
        if(counter===5)break;
        if(totalTaxableIncome<=taxArray[counter]){
            totalPayable = totalPayable+((totalTaxableIncome*rate)/100.0);
            //console.log(`counter ${counter} rate ${rate} totalTaxableIncome ${totalTaxableIncome} totalPayable ${totalPayable}`)
            return totalPayable
        }
        else{
            totalPayable=totalPayable+((taxArray[counter]*rate)/100.0)
        }
        totalTaxableIncome=totalTaxableIncome-taxArray[counter];
        //console.log(`counter ${counter} rate ${rate} totalTaxableIncome ${totalTaxableIncome} totalPayable ${totalPayable}`)
        counter = counter+1;rate = rate + 5
    }
    totalPayable=totalPayable+((totalTaxableIncome*25)/100.0)
    return totalPayable
  }

  const handleSubmit=(formData,totalTaxableIncome,provFund,submitted)=>{
      setTotalpayable(calculatePayableTax(totalTaxableIncome,formData.gender))
      setTotalTaxableIncome(totalTaxableIncome); setProvFund(provFund);
      setUserData(formData); setFormSubmitted(submitted)
  }

  const printDocument =() =>{
    const input = captureRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4', false);
        pdf.addImage(imgData, 'PNG', 0, 0, 590, 0, undefined, false);
        pdf.setFontSize(6)
        pdf.text(240,640,'©2021 VivaSoft, All right reserved.')
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }


  return (
    <div className="App">
      {!formSubmitted?
      (
        <>
        <Header/>
        <InComeDetails handleStates={(formData,totalTaxableIncome,provFund,
          submitted)=>handleSubmit(formData,totalTaxableIncome,provFund,
            submitted)} />  
        </>
      )
      :
      (
        <>
        <div ref={captureRef}>
          <Header/>
          <EmployeeDetailsAsOutputTable formData={userData}/>
          <TotalTax 
          totalTaxableIncome={totalTaxableIncome} gender = {userData.gender}/>

          <InvestmentAllowance providentFund={provFund} maxInvestTaxExemption={25} maxAllowedInvesment={15000000} 
            totalTaxIncome={totalTaxableIncome} totalPayableTax={totalpayable}
             provMonth={parseInt(userData.provMonths)} />   
        </div>
        <button onClick={printDocument}>Download Report</button>
        <Footer/>      
      </>
      )
      }


    </div>
  );
}

export default App;
