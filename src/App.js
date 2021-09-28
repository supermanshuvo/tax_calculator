import React, { useState, useRef, useEffect, createRef } from "react";
import "./App.css";
import jsPDF from "jspdf";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
// import html2pdf from 'html2pdf';
import 'jspdf-autotable'
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
  const taxableOthersRef = useRef(0);
  const [reportPhase, setReportPhase] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [zone, setZone] = useState("");
  const [createBtnShow, setCreateBtnShow] = useState(true);
  const [active, setActive] = useState("taxableIncome");
  const captureRef = createRef(null)


  const handleUserInfo = (userInfo, submit) => {
    setUserInfo(userInfo);
    setReportPhase(submit);
  };

  useEffect(() => {
    let newTotalPayable = calculatePayableTax(totalTaxableIncome, category);
    setTotalpayable(newTotalPayable);
  }, [category, totalTaxableIncome, formData, totalpayable]);



function generate() {  
  var doc = new jsPDF('p', 'pt', 'letter');  
  // var htmlstring = '';  
  // var tempVarToCheckPageHeight = 0;  
  //pageHeight = doc.internal.pageSize.height;  
  // var specialElementHandlers = {  
  //     // element with id of "bypass" - jQuery style selector  
  //     '#bypassme': function(element, renderer) {  
  //         // true = "handled elsewhere, bypass text extraction"  
  //         return true  
  //     }  
  // };  
  var margins = {  
      top: 10,  
      bottom: 10,  
      left: 70,  
      right: 70,  
      width: 780  
  };  
  var y = 20;  
  doc.setLineWidth(2);  
  doc.text(200, y = y + 30, "Tax Statement (2020-2021)");
  doc.autoTable({  
    html: '#userTable',  
    startY: 70,  
    theme: 'grid',  
    columnStyles: {  
        0: {  
            cellWidth: 100,  
        },  
        1: {  
            cellWidth: 100,  
        }
    },  
    styles: {  
        minCellHeight: 16
    } ,
    margin: margins,
    didParseCell: function (table) {
      if (table.section === 'head') {
        table.cell.styles.fillColor = '#dee2e6';
        table.cell.styles.textColor = '#525252';
      }
   },

})  
  doc.autoTable({  
      html: '#taxableTable',  
      startY: doc.lastAutoTable.finalY + 10,  
      theme: 'grid',  
      columnStyles: {  
          0: {  
              cellWidth: 70,  
          },  
          1: {  
              cellWidth: 120,  
          },  
          2: {  
              cellWidth: 70,  
          } ,
          3: {  
            cellWidth: 80,  
        },
        4: {  
          cellWidth: 100,  
      }     
      },  
      styles: {  
          minCellHeight: 16  
      },
      margin: margins,
      didParseCell: function (table) {
        if (table.section === 'head') {
          table.cell.styles.fillColor = '#dee2e6';
          table.cell.styles.textColor = '#525252';
        }
     },
  })  
  doc.setFontSize(11);
  doc.text(240, doc.lastAutoTable.finalY + 30, "Taxable Income");
  doc.autoTable({  
    html: '#totalTaxTable',  
    startY: doc.lastAutoTable.finalY + 10,  
    theme: 'grid',  
    columnStyles: {  
        0: {  
            cellWidth: 60,  
        },  
        1: {  
            cellWidth: 90,  
        },  
        2: {  
            cellWidth: 40,  
        },
        3: {  
          cellWidth: 100,  
      },
        4: {  
          cellWidth: 50,  
      }, 
      5: {  
        cellWidth: 120,  
    },       
    },  
    styles: {  
        minCellHeight: 16
    },
    margin: margins ,
    didParseCell: function (table) {
      if (table.section === 'head') {
        table.cell.styles.fillColor = '#dee2e6';
        table.cell.styles.textColor = '#525252';
      }
   }, 
})

doc.autoTable({  
  html: '#investmentTable',  
  startY: doc.lastAutoTable.finalY + 10,  
  theme: 'grid',  
  columnStyles: {  
      0: {  
          cellWidth: 140,  
      },  
      1: {  
          cellWidth: 160,  
      }
  },  
  styles: {  
      minCellHeight: 16
  }  ,
  margin: margins,
  didParseCell: function (table) {
    if (table.section === 'head') {
      table.cell.styles.fillColor = '#dee2e6';
      table.cell.styles.textColor = '#525252';
    }
 },
})
  doc.setFontSize(9);
  doc.text(240, doc.lastAutoTable.finalY + 30, "©2021 VivaSoft, All right reserved.");
  doc.save('Tax_Statement.pdf');  
}  
  
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
    taxableOthersRef.current = formData.othersAmount * formData.pvMonths;

    const totaltaxIncome =
      taxableBasicRef.current +
      taxableMedicalRef.current +
      taxableHousingRef.current +
      taxableConveyanceRef.current +
      formData.bonusAmount +
      formData.provFund+
      taxableOthersRef.current;

    setTotalTaxableIncome(totaltaxIncome);
    //totalTaxableIncome.current=totaltaxIncome
    // setCategory(category);
    //setTotalpayable(calculatePayableTax(totalTaxableIncome, category));
    setActive('taxableIncome')
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
                <div className={!reportPhase ?"accordion col-md-8 col-sm-12":'row report_page'} id="accordionExample" ref={captureRef}>
                  
                {reportPhase ? (
                  <button className="download_report" onClick={generate}>
                    Download Report
                  </button>
                  
                ) : null}
                
                  {reportPhase === true ? (
                    <ReportHeader userInfo={userInfo} region={zone} />
                  ) : null}

                  <TaxableIncome reportPhase={reportPhase}
                    title = "taxableIncome"
                    active={active} setActive={setActive}
                    formBasic={formData.basicAmount}
                    formHousing={formData.housingAmount}
                    formMedical={formData.medicalAmount}
                    formConveyance={formData.conveyanceAmount}
                    formOthers={formData.othersAmount}
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
                    taxableConveyance={taxableConveyanceRef.current}
                    taxableOthers={taxableOthersRef.current}
                    reportPhase={reportPhase}
                  />

                  <TotalTax reportPhase={reportPhase}
                   title = "totalTax"
                   setTotalpayable={setTotalpayable}
                    active={active} setActive={setActive}
                    category={category}
                    totalTaxableIncome={totalTaxableIncome}
                  />
                  <InvestmentAllowance reportPhase={reportPhase}
                  title = "investmentAllowance"
                    active={active} setActive={setActive}
                    provFund={formData.provFund}
                    zone={zone}
                    totalTaxIncome={totalTaxableIncome}
                    totalPayableTax={totalpayable}
                  />
                  <div style={{margin:"40px"}}>
                  {createBtnShow &&
                    <button type="button"
                      className="create_report"
                      onClick={() => setCreateBtnShow(false)}
                    >
                      Create Report
                    </button>}
                  {reportPhase === false && createBtnShow===false ? (
                    <UserDetails
                      handleUserSubmit={(userData, submitted) =>
                        handleUserInfo(userData, submitted)
                      }
                    />
                  ) : null}
             
                  </div>  
                </div>
                
                {!reportPhase ?<div className="col-md-4 col-sm-12">
                  <UpdateIncomeDetails yearlyCheck ={formData.yearlyCheck}
                    updateZone={(newZone) => setZone(newZone)}
                    updateCategory={(newCategory) => setCategory(newCategory)}
                    formData={formData}
                    handleStates={(formData, submitted) =>
                      handleFormSubmit(formData, submitted)
                    }
                  />
                </div>:''}
                </div>
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
