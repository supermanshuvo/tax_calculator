import React from "react";

const EmployeeDetails = () => {
  return (
    <>
      <div className="container-fluid">
        <p className="All_Headings">Employee Details</p>
        <form action="">
          <div className="row">
            {/* left-side-fields starts */}
            <div className="col-6 table-left">
              <div className="form-group">
                <label>
                  <span>*</span> Enter Employee Name
                </label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group">
                <label>
                  <span>*</span> Location
                </label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group">
                <label>
                  <span>*</span> Department
                </label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group">
                <label>
                  <span>*</span> Designation
                </label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group">
                <p className="IncomeTaxCardFor">
                  <i>
                    Income Tax Card For : Financial Year 2020-2021 (Asst. Year
                    2021-2022)
                  </i>
                </p>
              </div>
            </div>

            {/* left-side-fields ends */}

            {/* right-side-fields starts
             */}
            <div className="col-6 table-right">
              <div>
                <label>Eligible for</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={12}
                >
                  <optgroup>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label>Gender</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={"M"}
                >
                  <optgroup>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label>Prov. Months</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={12}
                >
                  <optgroup>
                    <option>Open this select menu</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* right-side-fields ends */}
          </div>
          <div>
            {/* <button type="button" className="btn btn-success">
              Success
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeDetails;
