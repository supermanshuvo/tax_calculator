import React from "react";

const IncomeTaxChart = () => {
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
                      <td className="withoutInputFields">
                        <p className="text-center">First Tk.</p>
                      </td>
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
                      <td>Next Tk.</td>
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
                      <td>Next Tk.</td>
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
                      <td>Next Tk.</td>
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
                      <td>Next Tk.</td>
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
                      <td>Next Tk.</td>
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
                        <p className="text-center">25</p>
                      </td>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
                      </td>
                    </tr>

                    {/* Calculating Total */}
                    <tr>
                      <th colSpan={5}>Total Payable Tax</th>
                      <td className="withoutInputFields">
                        <p className="text-center">0</p>
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
