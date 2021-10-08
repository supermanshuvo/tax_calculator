import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

function UserDetails({ handleUserSubmit }) {
  const { handleSubmit, register } = useForm();

  const handleFormData =  (userData) => {
  //let userDataObj =  {...userData}

  try{
    axios.post('https://sheet.best/api/sheets/72625992-ace7-4115-ab14-255c18b776df', 
    userData)
    .then(response => 
      console.log('SuccessFull')
    )

  }  catch(error){
    console.log(`${error.name} occurs!`)
  }
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
                  placeholder='Enter Name'
                  required
                  {...register("name")}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  placeholder='Enter E-mail'
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
                  placeholder='Enter Company Name'
                  {...register("company")}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  placeholder='Enter Phone Number'
                  required
                  {...register("phone")}
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
