import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InvestmentAllowance from "./components/InvestmentAllowance";

const App = () => {
  return (
    <>
      <InvestmentAllowance PF={2} ConfigureH12={25} ConfigureH17={15000000} TotalTaxIncome={168000}/>
    </>
  );
};

export default App;