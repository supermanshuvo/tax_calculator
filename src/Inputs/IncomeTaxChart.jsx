import React from "react";

const IncomeTaxChart = () => {
  return (
    <>
      <div className="container fields">
        <p className="All_Headings">Income Tax</p>
        <form action="">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="table-responsive">
                <table className="table">
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
                      <td className="td_of_charts">First Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">163,000</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">163,000</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 2nd item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">5</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 3rd item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">10</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 4th item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">15</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 5th item */}
                    <tr>
                      <td className="td_of_charts">Next Tk.</td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">20</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>
                    {/* 6th item */}

                    <tr>
                      <td className="td_of_charts last_point">Next Tk.</td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">From</p>
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">0</p>
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">25</p>
                      </td>
                      <td className="withoutInputFields last_point">
                        <p className="text-center">0</p>
                      </td>
                    </tr>

                    {/* Calculating Total */}
                    <tr>
                      <td colSpan={5} className="total_payable">
                        Total Payable
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center"></p>
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
};

export default IncomeTaxChart;
