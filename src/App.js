import ReactDOM from "react-dom";
import React, { useState } from 'react'
import ReactToPdf from "react-to-pdf";
import './App.css';
import {InComeDetails} from './components/IncomeDetails.js';
import TotalTax  from './components/TotalTax.js';

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

  return (
    <div className="App">
      {!formSubmitted?
      (
        <InComeDetails handleStates={(formData,totalTaxableIncome,
          submitted)=>{setTotalTaxableIncome(totalTaxableIncome);setUserData(formData);setFormSubmitted(submitted)}}/>
      )
      :
      (
        <>
        <div ref={ref}>
          <h3>{totalTaxableIncome}</h3>
          <TotalTax totalTaxableIncome={totalTaxableIncome} gender = {userData.gender}/>
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
