import React from "react";
import EmployeeDetails from "./Inputs/EmployeeDetails";
import IncomeDetails from "./Inputs/IncomeDetails";
import IncomeTaxChart from "./Inputs/IncomeTaxChart";
import InvestmentAllowance from "./Inputs/InvestmentAllowance";
import Header from "./Headerfooter/Header";
import Footer from "./Headerfooter/Footer";
import EmployeeDetailsAsOutputTable from "./Inputs/EmployeeDetailsAsOutputTable";
import InvestAllowancep2 from "./Inputs/InvestAllowancep2";
import "./App.scss";
const App = () => {
  return (
    <>
      <Header />
      <EmployeeDetails />
      {/* <EmployeeDetailsAsOutputTable /> -> this is for showing Employee Details in a table */}
      <IncomeDetails />
      <IncomeTaxChart />
      <InvestmentAllowance />
      <InvestAllowancep2 />
      <Footer />
    </>
  );
};

export default App;
