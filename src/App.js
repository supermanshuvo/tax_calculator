import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { InComeDetails } from "./components/IncomeDetails.js";
import UserDetails from "./components/UserDetails";
import { UpdateIncomeDetails } from "./components/UpdateIncomeDetails";
import ReportHeader from "./components/ReportHeader";
import TaxableIncome from "./components/TaxableIncome";
import TotalTax from "./components/TotalTax.js";
import InvestmentAllowance from "./components/InvestMentAllowence.js";
import { taxConfig } from "./configData.js";
import { calculatePayableTax } from "./utils.js";
import Footer from "./components/Footer";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [category, setCategory] = useState();
  const [formData, setUserData] = useState({});
  const [totalTaxableIncome, setTotalTaxableIncome] = useState(0);
  const [totalpayable, setTotalpayable] = useState(0);
  const housingLessRef = useRef(0);
  const medicalLesssRef = useRef(0);
  const conveyanceLesssRef = useRef(0);
  const taxableBasicRef = useRef(0);
  const taxableMedicalRef = useRef(0);
  const taxableHousingRef = useRef(0);
  const taxableConveyanceRef = useRef(0);
  const captureRef = useRef(null);
  const [reportPhase, setReportPhase] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [zone, setZone] = useState("");
  const [createBtnShow, setCreateBtnShow] = useState(true);
  const [active, setActive] = useState("taxableIncome");


  const handleUserInfo = (userInfo, submit) => {
    setUserInfo(userInfo);
    setReportPhase(submit);
  };

  useEffect(() => {
    let newTotalPayable = calculatePayableTax(totalTaxableIncome, category);
    setTotalpayable(newTotalPayable);
  }, [category, totalTaxableIncome, formData, totalpayable]);

  const printDocument = () => {
    const input = captureRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4", false);
      pdf.addImage(imgData, "PNG", 0, 0, 590, 0, undefined, false);
      pdf.setFontSize(8);
      pdf.text(240, 640, "©2021 VivaSoft, All right reserved.");
      //pdf.output('dataurlnewwindow');
      pdf.save("TaxReport.pdf");
    });
  };

  const handleFormSubmit = (formData, submitted) => {
    setZone(formData.zone);
    setUserData(formData);
    setCategory(formData.category);
    const newHousingLess = Math.min(
      formData.basicAmount *
        formData.pvMonths *
        (taxConfig.lessAmount.maxHousingPercentage / 100.0),
      taxConfig.lessAmount.maxHousing
    );
    const newMedicalLess = Math.min(
      formData.basicAmount *
        formData.pvMonths *
        (taxConfig.lessAmount.maxMedicalPercentage / 100.0),
      taxConfig.lessAmount.maxMedical
    );

    conveyanceLesssRef.current = taxConfig.lessAmount.maxConveyance;
    //setHousingLess(newHousingLess);
    housingLessRef.current = newHousingLess;
    medicalLesssRef.current = newMedicalLess;
    taxableBasicRef.current = formData.basicAmount * formData.pvMonths;
    taxableMedicalRef.current = Math.max(
      formData.medicalAmount * formData.pvMonths - medicalLesssRef.current,
      0
    );
    taxableHousingRef.current = Math.max(
      formData.housingAmount * formData.pvMonths - housingLessRef.current,
      0
    );
    taxableConveyanceRef.current = Math.max(
      formData.conveyanceAmount * formData.pvMonths -
        taxConfig.lessAmount.maxConveyance,
      0
    );

    const totaltaxIncome =
      taxableBasicRef.current +
      taxableMedicalRef.current +
      taxableHousingRef.current +
      taxableConveyanceRef.current +
      formData.bonusAmount +
      formData.provFund;

    setTotalTaxableIncome(totaltaxIncome);
    //totalTaxableIncome.current=totaltaxIncome
    // setCategory(category);
    //setTotalpayable(calculatePayableTax(totalTaxableIncome, category));
    setFormSubmitted(submitted);
  };

  return (
    <>
      <Router>
        <>
          <Header />
          {/*<Navbar updateCategory={(newCategory) => setCategory(newCategory)} />*/}

          {!formSubmitted && !!formData ? (
            <Switch>
              <Route path="/">
                <InComeDetails
                  handleStates={(formData, submitted) =>
                    handleFormSubmit(formData, submitted)
                  }
                />
              </Route>
            </Switch>
          ) : (
            <>
              <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-12" ref={captureRef}>
                  {reportPhase === true ? (
                    <ReportHeader userInfo={userInfo} region={zone} />
                  ) : null}

                  <TaxableIncome title = "taxableIncome"
                  active={active} setActive={setActive}
                    formBasic={formData.basicAmount}
                    formHousing={formData.housingAmount}
                    formMedical={formData.medicalAmount}
                    formConveyance={formData.conveyanceAmount}
                    formPvMonths={formData.pvMonths}
                    formBonus={formData.bonusAmount}
                    formProvFund={formData.provFund}
                    totalTaxableIncome={totalTaxableIncome}
                    housingLess={housingLessRef.current}
                    medicalLesss={medicalLesssRef.current}
                    conveyanceLesss={conveyanceLesssRef.current}
                    taxableBasic={taxableBasicRef.current}
                    taxableHousing={taxableHousingRef.current}
                    taxableMedical={taxableMedicalRef.current}
                    reportPhase={reportPhase}
                    taxableConveyance={taxableConveyanceRef.current}
                  />

                  <TotalTax title = "totalTax"
                   setTotalpayable={setTotalpayable}
                    active={active} setActive={setActive}
                    category={category}
                    totalTaxableIncome={totalTaxableIncome}
                  />
                  <InvestmentAllowance
                  title = "investmentAllowance"
                    active={active} setActive={setActive}
                    provFund={formData.provFund}
                    zone={zone}
                    totalTaxIncome={totalTaxableIncome}
                    totalPayableTax={totalpayable}
                  />
                </div>
                
                <div className="col-md-4 col-sm-12">
                  <UpdateIncomeDetails
                    updateZone={(newZone) => setZone(newZone)}
                    updateCategory={(newCategory) => setCategory(newCategory)}
                    formData={formData}
                    handleStates={(formData, submitted) =>
                      handleFormSubmit(formData, submitted)
                    }
                  />
                </div>
                </div>
              </div>

              <div style={{margin:"40px"}}>
                  {createBtnShow &&
                    <button type="button"
                      className="create_report"
                      onClick={() => setCreateBtnShow(false)}
                    >
                      Create Report
                    </button>}
                  {reportPhase === false && createBtnShow==false ? (
                    <UserDetails
                      handleUserSubmit={(userData, submitted) =>
                        handleUserInfo(userData, submitted)
                      }
                    />
                  ) : null}
             

                {reportPhase ? (
                  <button className="download_report" onClick={printDocument}>
                    Download Report
                  </button>
                ) : null}
              </div>  
            </>
          )}

          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
