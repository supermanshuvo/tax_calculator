import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InvestmentAllowance from "./components/InvestmentAllowance";

const App = () => {
  return (
    <>
      <InvestmentAllowance PF={2}/>
    </>
  );
};

export default App;