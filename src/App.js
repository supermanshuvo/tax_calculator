import React, { useState,useRef,  useEffect} from 'react'
import './App.css';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {InComeDetails} from './components/IncomeDetails.js';
//import {UpdateIncomeDetails} from './components/UpdateIncomeDetails'
import {BrowserRouter as Router,Link, Switch, Route} from "react-router-dom";
import TotalTax  from './components/TotalTax.js';
import InvestmentAllowance from "./components/InvestMentAllowence.js";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TaxableIncome from "./components/TaxableIncome";
import Navbar from "./components/Navbar";
import {taxConfig, calculatePayableTax} from "./configData.js";
import UserDetails from './components/UserDetails';
import ReportHeader from './components/ReportHeader';


function App() {
  const [formSubmitted,setFormSubmitted]=useState(false)
  const [category,setCategory]=useState('man')
  const [formData,setUserData]=useState({})
  const [totalTaxableIncome,setTotalTaxableIncome] = useState(0);
  const [totalpayable,setTotalpayable] = useState(0)
  const housingLessRef = useRef(0);
  const medicalLesssRef = useRef(0);
  const conveyanceLesssRef = useRef(0);
  const taxableBasicRef = useRef(0);
  const taxableMedicalRef = useRef(0);
  const taxableHousingRef = useRef(0);
  const taxableConveyanceRef = useRef(0);
  const captureRef = useRef(null);
  const captureRef2 = useRef(null);
  const [reportPhase,setReportPhase]=useState(false);
  const [userInfo,setUserInfo]=useState({})
  //const totalTaxableIncome=useRef(0);

  useEffect(()=>{
    let newTotalPayable=calculatePayableTax(totalTaxableIncome,category)
    setTotalpayable(newTotalPayable); 
    //console.log('Totalpayable',totalpayable);
  },[category,totalTaxableIncome,formData])

  const printDocument =() =>{
    const input = captureRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4', false);
        pdf.addImage(imgData, 'PNG', 0, 0, 590, 0, undefined, false);
        pdf.setFontSize(8)
        pdf.text(240,640,'©2021 VivaSoft, All right reserved.')
        //pdf.output('dataurlnewwindow');
        pdf.save("TaxReport.pdf");
      })
  }

    const handleUserInfo = (userInfo,submit)=>{
      setReportPhase(submit)
      setUserInfo(userInfo);
    }

    const handleSubmit = (formData, submitted)=>{
      setUserData(formData);
      const newHousingLess = Math.min(
        formData.basicAmount*formData.pvMonths*((taxConfig.lessAmount.maxHousingPercentage/100.0)),taxConfig.lessAmount.maxHousing
        );
      const newMedicalLess = Math.min(formData.basicAmount*formData.pvMonths*((taxConfig.lessAmount.maxMedicalPercentage/100.0)),
                      taxConfig.lessAmount.maxMedical);

      conveyanceLesssRef.current = taxConfig.lessAmount.maxConveyance  
      //setHousingLess(newHousingLess);
      housingLessRef.current = newHousingLess;
      medicalLesssRef.current = newMedicalLess;
      taxableBasicRef.current = formData.basicAmount*formData.pvMonths;
      taxableMedicalRef.current = Math.max(formData.medicalAmount*formData.pvMonths-medicalLesssRef.current,0)
      taxableHousingRef.current = Math.max(formData.housingAmount*formData.pvMonths-housingLessRef.current,0)
      taxableConveyanceRef.current = Math.max(formData.conveyanceAmount*formData.pvMonths-taxConfig.lessAmount.maxConveyance,0)
      
      const totaltaxIncome = taxableBasicRef.current+taxableMedicalRef.current+taxableHousingRef.current+
        taxableConveyanceRef.current+formData.bonusAmount+formData.provFund;

      setTotalTaxableIncome(totaltaxIncome)
      //totalTaxableIncome.current=totaltaxIncome
      // setCategory(category);
      setTotalpayable(calculatePayableTax(totalTaxableIncome,category))
      setFormSubmitted(submitted);
    }  
  
  return (
    <Router>
    <>
      <Header />
      <Navbar changeCategory={(newCategory)=>setCategory(newCategory)}/>

      {
      !formSubmitted && !!formData ?
        (
        <Switch>
          <Route path="/man">
              <InComeDetails category="male" firstAmount ={300000}  handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
          <Route path="/woman">
          <InComeDetails category="female" firstAmount ={350000}  handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
          <Route path="/disabled">
          <InComeDetails category="disabled" firstAmount ={400000} handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
          <Route path="/oldage">
          <InComeDetails category="oldage" firstAmount ={350000}  handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
        </Switch>
        ):
        (
          <>
          <div ref={captureRef}>
          {reportPhase===true?(<ReportHeader userInfo={userInfo}/> ):null}   
          <div></div>
          <TaxableIncome formData={formData} handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)}
           formBasic={formData.basicAmount} formHousing={formData.housingAmount} 
            formMedical={formData.medicalAmount} formConveyance={formData.conveyanceAmount}
            formPvMonths={formData.pvMonths} formBonus={formData.bonusAmount}
            formProvFund={formData.provFund}
            totalTaxableIncome={totalTaxableIncome} housingLess={housingLessRef.current}
            medicalLesss={medicalLesssRef.current} conveyanceLesss={conveyanceLesssRef.current}
            taxableBasic={taxableBasicRef.current} taxableHousing={taxableHousingRef.current}
            taxableMedical={taxableMedicalRef.current} reportPhase={reportPhase} 
          taxableConveyance={taxableConveyanceRef.current}/>

          <TotalTax category={category} totalTaxableIncome ={totalTaxableIncome}/>
          <InvestmentAllowance providentFund={formData.provFund} maxInvestTaxExemption={25} maxAllowedInvesment={15000000} 
            totalTaxIncome={totalTaxableIncome} totalPayableTax={totalpayable}
        provMonth={formData.pvMonths} />   
          </div>
          {reportPhase===false?(
          <>
          <Link className="btn btn-primary" 
                     to={`/generateReport`}>CreateReport</Link>
          <Route exact path="/generateReport"children={ <UserDetails 
            handleUserSubmit={(userData,
              submitted)=>handleUserInfo(userData,submitted)} />}></Route></>):null}
          {/*<Route exact path="generateReport">
            <UserDetails  handleUserSubmit={(userData,
              submitted)=>handleSubmit(userData,submitted)} /> 
            </Route>*/}
            {reportPhase===true?<button className="downloadReport" onClick={printDocument} >Download Report</button> :null}
          </>
        )
    }
      
    <Footer ref2={captureRef2}/>
    </>
    </Router>
  );
}

export default App;
