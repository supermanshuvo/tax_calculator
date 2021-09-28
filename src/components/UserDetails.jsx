import React from "react";
import { useForm } from "react-hook-form";

function UserDetails({ handleUserSubmit }) {
  const { handleSubmit, register } = useForm();
  const handleFormData = (userData) => {
  // function WriteFile(){
  //   var fh = fopen("../userData.txt",3); // Open the file for writing
  //   if(fh!=-1) // If the file has been successfully opened
  //   {
  //       var str = "Some text goes here...";
  //       fwrite(fh, str); // Write the string to a file
  //       fclose(fh); // Close the file
  //   }
  //   }
  //   WriteFile();
    
    handleUserSubmit(userData, true);
  };

  return (
    <div className="container user_information">
      <h3 className="All_Headings">User Information</h3>
      <div className="row">
        <div className="col-8 mx-auto">
          <form onSubmit={handleSubmit(handleFormData)} className="userForm">
            <div className="d-flex justify-content-between ">
              <div className="form-group">
                <label>Name</label>
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
