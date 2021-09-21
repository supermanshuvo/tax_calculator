import React, { useEffect, useState, useLayoutEffect } from "react";
import { taxConfig } from "../configData.js";

function Totaltax(props) {
  const [conditon1, setCondition1] = useState(0);
  const [conditon2, setCondition2] = useState(0);
  const [conditon3, setCondition3] = useState(0);
  const [conditon4, setCondition4] = useState(0);
  const [conditon5, setCondition5] = useState(0);
  const [conditon6, setCondition6] = useState(0);

  //amount
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [amount3, setAmount3] = useState(0);
  const [amount4, setAmount4] = useState(0);
  const [amount5, setAmount5] = useState(0);
  const [amount6, setAmount6] = useState(0);

  //dividable amount
  const [taxable1, setTaxable1] = useState(0);
  const [taxable2, setTaxable2] = useState(0);
  const [taxable3, setTaxable3] = useState(0);
  const [taxable4, setTaxable4] = useState(0);
  const [taxable5, setTaxable5] = useState(0);
  const [taxable6, setTaxable6] = useState(0);

  useLayoutEffect(() => {
    setCondition1(0);
    setCondition2(0);
    setCondition3(0);
    setCondition4(0);
    setCondition5(0);
    setCondition6(0);
    setAmount1(0);
    setAmount2(0);
    setAmount3(0);
    setAmount4(0);
    setAmount5(0);
    setAmount6(0);
    setTaxable1(0);
    setTaxable2(0);
    setTaxable3(0);
    setTaxable4(0);
    setTaxable5(0);
    setTaxable6(0);
  }, [props]);

  const handleChange = () => {
    //male tax

    let item = props.totalTaxableIncome;
    setAmount1(item);
    let a = 5000;
    let b = 30000;
    let c = 60000;
    let d = 100000;
    
    let t1, t2, t3, t4, t5;
    if (props.category === "disabled")
      [t1, t2, t3, t4, t5] = [...taxConfig.taxRules.disabled];
    else if (props.category === "man")
      [t1, t2, t3, t4, t5] = [...taxConfig.taxRules.male];
    else if (props.category === "freedomFighters")
      [t1, t2, t3, t4, t5] = [...taxConfig.taxRules.freedomFighters];
    else [t1, t2, t3, t4, t5] = [...taxConfig.taxRules.others];

    let sumOfTaxArray1 = t1 + t2 + t3 + t4 + t5;
    let sumOfTaxArray2 = t1 + t2 + t3 + t4;
    let sumOfTaxArray3 = t1 + t2 + t3;
    let sumOfTaxArray4 = t1 + t2;
    let sumOfTaxArray5 = t1;

    if (item > sumOfTaxArray1) {
      let amnt2 = item - t1;
      setAmount2(amnt2);
      let amnt3 = amnt2 - t2;
      setAmount3(amnt3);
      let amnt4 = amnt3 - t3;
      setAmount4(amnt4);
      let amnt5 = amnt4 - t4;
      setAmount5(amnt5);
      let amnt6 = amnt5 - t5;
      setAmount6(amnt6);

      let tax1 = item - sumOfTaxArray1;
      setTaxable1(t1);
      setTaxable2(t2);
      setTaxable3(t3);
      setTaxable4(t4);
      setTaxable5(t5);
      setTaxable6(tax1);

      let paidTax1 = (tax1 * 25) / 100;
      let totalTax1 = paidTax1 + a + b + c + d;
      setCondition1(a);
      setCondition2(b);
      setCondition3(c);
      setCondition4(d);
      setCondition5(paidTax1);
      setCondition6(totalTax1);
    }

    //condition2
    else if (item > sumOfTaxArray2) {
      let amnt2 = item - t1;
      setAmount2(amnt2);
      let amnt3 = amnt2 - t2;
      setAmount3(amnt3);
      let amnt4 = amnt3 - t3;
      setAmount4(amnt4);
      let amnt5 = amnt4 - t4;
      setAmount5(amnt5);

      let tax2 = item - sumOfTaxArray2;

      setTaxable1(t1);
      setTaxable2(t2);
      setTaxable3(t3);
      setTaxable4(t4);
      setTaxable5(tax2);

      let paidTax2 = (tax2 * 20) / 100;
      let totalTax2 = paidTax2 + a + b + c;

      setCondition1(a);
      setCondition2(b);
      setCondition3(c);
      setCondition4(paidTax2);
      setCondition6(totalTax2);
    }

    //condition3
    else if (item > sumOfTaxArray3) {
      let amnt2 = item - t1;
      setAmount2(amnt2);
      let amnt3 = amnt2 - t2;
      setAmount3(amnt3);
      let amnt4 = amnt3 - t3;
      setAmount4(amnt4);

      let tax3 = item - sumOfTaxArray3;
      setTaxable1(t1);
      setTaxable2(t2);
      setTaxable3(t3);
      setTaxable4(tax3);

      let paidTax3 = (tax3 * 15) / 100;
      let totalTax3 = paidTax3 + a + b;
      setCondition1(a);
      setCondition2(b);
      setCondition3(paidTax3);
      setCondition6(totalTax3);
    }

    //condition4
    else if (item > sumOfTaxArray4) {
      let amnt2 = item - t1;
      setAmount2(amnt2);
      let amnt3 = amnt2 - t2;
      setAmount3(amnt3);

      let tax4 = item - sumOfTaxArray4;
      setTaxable1(t1);
      setTaxable2(t2);
      setTaxable3(tax4);

      let paidTax4 = (tax4 * 10) / 100;
      let totalTax4 = paidTax4 + a;
      setCondition1(a);
      setCondition2(paidTax4);
      setCondition6(totalTax4);
    }

    //condition5
    else if (item > sumOfTaxArray5) {
      let amnt2 = item - t1;
      setAmount2(amnt2);

      let tax5 = item - sumOfTaxArray5;

      setTaxable1(t1);
      setTaxable2(tax5);

      let totalTax5 = (tax5 * 5) / 100;
      setCondition1(totalTax5);
      setCondition6(totalTax5);
    }
  };

  useEffect(() => handleChange());

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <div className="container">
        <p className="All_Headings">Income Tax</p>
        <form action="">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="table-responsive">
                <table className="table table-hover table-bordered border-dark ">
                  {/* All headings */}
                  <thead>
                    <tr className="total_of_IncomeDetails">
                      <th scope="col" className="text-center"></th>
                      <th scope="col" className="text-center"></th>
                      <th scope="col" className="text-center"></th>
                      <th scope="col" className="text-center"></th>
                      <th scope="col" className="text-center">
                        Rate
                      </th>
                      <th scope="col" className="text-center">
                        Tax
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1st item */}
                    <tr>
                      <td className="withoutInputFields td_of_charts">
                        First Tk.
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(taxable1)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(amount1)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0%</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 2nd item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(taxable2)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(amount2)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">5%</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          {format.format(conditon1)}
                        </p>
                      </td>
                    </tr>
                    {/* 3rd item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(taxable3)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">from</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(amount3)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">10%</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          {format.format(conditon2)}
                        </p>
                      </td>
                    </tr>
                    {/* 4th item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(taxable4)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(amount4)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">15%</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          {format.format(conditon3)}
                        </p>
                      </td>
                    </tr>
                    {/* 5th item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(taxable5)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(amount5)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">20%</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          {format.format(conditon4)}
                        </p>
                      </td>
                    </tr>
                    {/* 6th item */}

                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(taxable6)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">{format.format(amount6)}</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">25%</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          {format.format(conditon5)}
                        </p>
                      </td>
                    </tr>

                    {/* Calculating Total */}
                    <tr>
                      <th colSpan={5}>Total Payable</th>
                      <td className="withoutInputFields">
                        <p className="text-center">
                          {format.format(conditon6)}
                        </p>
                      </td>
                    </tr>
                    {/* end of all items and table */}
                  </tbody>
                </table>
              </div>

              {/*in next line "col-9" div will have been ended */}
            </div>
            {/*in next line "row" div will have been ended */}
          </div>
          {/*in next line "form"  will have been ended */}
        </form>
        {/*in next line "container-fluid" div will have been ended */}
      </div>
    </>
  );
}

export default Totaltax;
