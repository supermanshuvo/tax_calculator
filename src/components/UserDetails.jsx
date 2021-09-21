import React from "react";
import { useForm } from "react-hook-form";

function UserDetails({ handleUserSubmit }) {
  const { handleSubmit, register } = useForm();
  const handleFormData = (userData) => {
    handleUserSubmit(userData, true);
  };

  return (
    <div className="container">
      <p className="All_Headings">User Information</p>
      <div className="row">
        <div className="col-8 mx-auto">
          <form onSubmit={handleSubmit(handleFormData)}>
            <div className="d-flex justify-content-between ">
              <div className="form-group">
                <label>UserName</label>
                <input
                  required
                  {...register("username")}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  required
                  {...register("email")}
                  type="email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="d-flex justify-content-between ">
              <div className="form-group">
                <label>Company Name</label>
                <input
                  required
                  {...register("companyName")}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  required
                  {...register("mobileNumber")}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <button className=" create_report">Show Report</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
