import React from "react";

function EmployeeDetailsAsOutputTable({formData}) {
  return (
    <>
      <div className="container fields">
        <p className="All_Headings">Employee Details</p>
        <form action="">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {/* 1st item */}
                    <tr>
                      {/* left -1 */}
                      <th className="th_of_Output_Table" scope="row">
                        Employee Name
                      </th>
                      <td className="td_of_Output_Table">{formData.employeeName}</td>
                      {/* right -  1*/}
                      <th className="th_of_Output_Table">Branch</th>
                      <td className="td_of_Output_Table">{formData.branch}</td>
                    </tr>
                    {/* 2nd item */}
                    <tr>
                      {/* left - 2*/}
                      <th className="th_of_Output_Table">Employee Code</th>
                      <td className="td_of_Output_Table">{formData.employeeCode}</td>
                      {/* right -  2*/}
                      <th className="th_of_Output_Table">Designation</th>
                      <td className="td_of_Output_Table">
                      {formData.designation}
                      </td>
                    </tr>
                    {/* 3rd item */}
                    <tr>
                      {/* left - 3*/}
                      <th className="th_of_Output_Table">Location</th>
                      <td className="td_of_Output_Table">{formData.location}</td>
                      {/* right -  3*/}
                      <th className="th_of_Output_Table">Eligible for</th>
                      <td className="td_of_Output_Table">{formData.eligibility} Months</td>
                    </tr>
                    {/* 4th item */}
                    <tr>
                      {/* left - 4 */}
                      <th className="th_of_Output_Table">Department</th>
                      <td className="td_of_Output_Table">{formData.department}</td>
                      {/* right -  4*/}
                      <th className="th_of_Output_Table">Gender</th>
                      <td className="td_of_Output_Table">{formData.gender}</td>
                    </tr>
                    {/* 5th item */}
                    <tr>
                      {/* left - 5*/}
                      <th className="th_of_Output_Table">Join Date</th>
                      <td className="td_of_Output_Table">{formData.joinDate}</td>
                      {/* right -  5*/}
                      <th className="th_of_Output_Table">Prov. Months</th>
                      <td className="td_of_Output_Table">{formData.provMonths} Months</td>
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

export default EmployeeDetailsAsOutputTable;