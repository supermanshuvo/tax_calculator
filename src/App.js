import React, { useState,useRef,  useEffect} from 'react'
import './App.css';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {InComeDetails} from './components/IncomeDetails.js';
//import {UpdateIncomeDetails} from './components/UpdateIncomeDetails'
import {BrowserRouter as Router,Link, Switch, Route,Redirect} from "react-router-dom";
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
// Image
import male from "./images/01-icon.png";
import female from "./images/02-icon.png";
import disable from "./images/03-icon.png";
import sinior from "./images/04-icon.png";


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
  const [createBtnShow,setCreateBtnShow ]= useState(true);
  const [reportPhase,setReportPhase]=useState(false);
  const [userInfo,setUserInfo]=useState({})


  useEffect(()=>{
    let newTotalPayable=calculatePayableTax(totalTaxableIncome,category)
    setTotalpayable(newTotalPayable); 
    //console.log('Totalpayable',totalpayable);
  },[category,totalTaxableIncome,formData,totalpayable])

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
              <InComeDetails category="Male"  icon={male} content="Morbi in sem quis dui placerat ornare.
               Pellentesque odio nisi"  firstAmount ={300000}  handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
          <Route path="/woman">
          <InComeDetails category="Female" icon={female}  content="Praesent dapibus, neque id cursus faucibus,
           tortor neque egestas auguae." firstAmount ={350000}  handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
          <Route path="/disabled">
          <InComeDetails category="Disabled" icon={disable} content="Phasellus ultrices nulla quis nibh. Quisque a lectus. 
          Donec consectetuer ligula vulputate."  firstAmount ={400000} handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
          <Route path="/oldage">
          <InComeDetails category="Oldage" icon={sinior} content="Nam dui mi, tincidunt quis, accumsan porttitor, 
          facilisis luctus, metus." firstAmount ={350000}  handleStates={(formData,
            submitted)=>handleSubmit(formData,submitted)} /> 
          </Route>
          <Redirect to="/man" />
        </Switch>
        ):
        (
        <>
          <div ref={captureRef}>
          {reportPhase===true?(<ReportHeader userInfo={userInfo} region = {formData.zone}/> ):null}   
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
          <InvestmentAllowance provFund={formData.provFund} zone={formData.zone}
           totalTaxIncome={totalTaxableIncome} totalPayableTax={totalpayable}/>   
          </div>
          {reportPhase===false?(
        <>
        {createBtnShow?
        (
          <Link className=" create_report" 
                  to={`/generateReport`} onClick={()=>setCreateBtnShow(false)}>Create Report</Link>
        ):null}
        
        <Route exact path="/generateReport"children={ <UserDetails 
          handleUserSubmit={(userData,
          submitted)=>handleUserInfo(userData,submitted)} />}></Route></>):null}
        {reportPhase===true?<button className="download_report" onClick={printDocument} >Download Report</button> :null}
      </>
        
        )
    }
      
    <Footer />
    </>
    </Router>
  );
}

export default App;
