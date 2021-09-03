import React from "react";
import jsPDF from "jspdf";

const InvestAllowancep2 = (props) => {
  const generatePdfReport = () => {
    let pdfDoc = new jsPDF();
    pdfDoc.html(document.querySelector(".container"), {
      callback: function (pdf) {
        pdf.save("taxReport.pdf");
      },
    });
  };
  /* let AllowInvestment = props.AllowInvestment,
      totalTaxIncome = props.TotalTaxIncome;
    let [lessRebate, setLessRebate] = useState(0),
      totalMonth = props.ProvMonth;
    let totalPayableTax = props.TotalPayableTax,
      ProvisionMonthTax = parseInt(AllowInvestment / totalMonth);
    let result =
      totalPayableTax - lessRebate < 0
        ? 5000
        : totalPayableTax - lessRebate < 5000
        ? 5000
        : totalPayableTax - lessRebate;
    let NetIncomeTaxPayable = result;
    (() => {
      let LessRebateResult = 0;
      setLessRebate(LessRebateResult);
    })();
    console.log(totalTaxIncome); */
  /* 
    E42 = AllowInvestment
    H20 = totalTaxIncome
    configure.C44 = 
    Configure.C45 =
    Configure.C46 =
    Configure.C49 =
    Configure.C50 =
    Configure.H44 =
    Configure.H46 =
    Configure.H47 =
    Configure.H49 =
    Configure.H50 =
    Configure.H51 =
    
    
    */
  return (
    <>
      <div className="container fields">
        <h3>
          {props.AllowInvestment}: {props.lessRebate} :
          {props.NetIncomeTaxPayable}:{props.ProvisionMonthTax}
        </h3>
        <p className="All_Headings">Total Calculation</p>
        <form action="">
          <div className="row">
            <div className="col-12 mx-auto">
              {/* 5th item */}
              <div className="row">
                <div className="col-4">
                  <label>Less Rebate on Investment Tk. </label>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                      <p>{props.AllowInvestment}</p> <p>{props.lessRebate}</p>
                    </div>
                  </div>
                  {/* dummy defaultValues inside p */}
                </div>
              </div>

              {/* div for horizontal line */}
              <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                  <hr />
                </div>
              </div>

              {/* div for Net Income Tax Payable	 */}
              <div className="row">
                <div className="col-4">
                  <label> Net Income Tax Payable</label>
                </div>
                <div className="col-8 mx-0 d-flex justify-content-end">
                  <p>{props.NetIncomeTaxPayable}</p>
                  {/* dummy defaultValues inside p */}
                </div>
              </div>

              {/* div for  Provision Per Month (12)  Months */}
              <div className="row">
                <div className="col-4">
                  <label> Provision Per Month (12) Months </label>
                </div>
                <div className="col-8 mx-0 d-flex justify-content-end">
                  <p>{props.ProvisionMonthTax}</p>
                  {/* dummy defaultValues inside p */}
                </div>
              </div>

              {/*in next line "col-9 mx-auto" div will have been ended */}
            </div>
            {/*in next line row "div" will have been ended */}
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn" onClick={generatePdfReport}>
              Download Report
            </button>
          </div>
        </form>
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
};

export default InvestAllowancep2;
