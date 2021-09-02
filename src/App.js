import React from "react";
import EmployeeDetails from "./Inputs/EmployeeDetails";
import IncomeDetails from "./Inputs/IncomeDetails";
import IncomeTaxChart from "./Inputs/IncomeTaxChart";
import InvestmentAllowance from "./Inputs/InvestmentAllowance";
import Header from "./Headerfooter/Header";
import Footer from "./Headerfooter/Footer";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />

      <EmployeeDetails />
      <IncomeDetails />
      <IncomeTaxChart />
      <InvestmentAllowance />
      <Footer />
    </>
  );
};

export default App;
