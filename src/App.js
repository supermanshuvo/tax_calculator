//import logo from './logo.svg';
import jsPDF from "jspdf"

import './App.css';
import { InComeDetails } from './components/IncomeDetails.js';

function App() {
  const generatePdfReport = ()=>{
    let pdfDoc = new jsPDF()
    pdfDoc.html(document.querySelector('.App'),{
    callback:function(pdf){
        pdf.save('taxReport.pdf')
    }
});
}

  return (
    <div className="App">
      <InComeDetails/>
      <button onClick={generatePdfReport}>Download Report</button>
    </div>
  );
}

export default App;
