import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InvestmentAllowance from "./components/InvestmentAllowance";

const App = () => {
  return (
    <>
      <InvestmentAllowance PF={5000} 
      ConfigureH12={25} 
      ConfigureH17={15000000} 
      TotalTaxIncome={993000} 
      ProvMonth={12}
      TotalPayableTax={71450}
      />
    </>
  );
};

export default App;