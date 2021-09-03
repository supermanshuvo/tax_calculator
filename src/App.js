import ReactDOM from "react-dom";
import React, { useState } from 'react'
import ReactToPdf from "react-to-pdf";
import './App.css';
import {InComeDetails} from './components/IncomeDetails.js';
import TotalTax  from './components/TotalTax.js';
import InvestmentAllowance from "./components/InvestmentAllowance.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import EmployeeDetailsAsOutputTable from './components/EmployeeDetailsAsOutputTable.js'

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [8,12]
};

function App() {
  const [formSubmitted,setFormSubmitted]=useState(false)
  const [totalTaxableIncome,setTotalTaxableIncome]=useState(0)
  const [userData,setUserData]=useState({})
  const [provFund,setProvFund] = useState(0)
  const [totalpayable,setTotalpayable] = useState(0)

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


  return (
    <div className="App">
      {!formSubmitted?
      (
        <>
        <Header/>
        <InComeDetails handleStates={(formData,totalTaxableIncome,provFund,
          submitted)=>handleSubmit(formData,totalTaxableIncome,provFund,
            submitted)} />  
        <Footer/>      
        </>
      )
      :
      (
        <>
        <div ref={ref}>
          <Header/>
          <EmployeeDetailsAsOutputTable formData={userData}/>
          <TotalTax 
          totalTaxableIncome={totalTaxableIncome} gender = {userData.gender}/>
          <InvestmentAllowance PF={provFund} ConfigureH12={25} ConfigureH17={15000000} 
            TotalTaxIncome={totalTaxableIncome} TotalPayable={totalpayable}
             ProvMonth={userData.provMonths} />
          <Footer/> 
        </div>
  
        <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
          {({toPdf}) => (
              <button onClick={toPdf}>Generate pdf</button>
          )}
      </ReactToPdf>
      </>
      )
      }


    </div>
  );
}

export default App;
