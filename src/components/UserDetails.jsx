import React from 'react'
import { useForm } from "react-hook-form";

function UserDetails({handleUserSubmit}) {
    const { handleSubmit, register } = useForm();
    const handleFormData=(userData)=>{
      handleUserSubmit(userData,true)
    }
    
    return (
         <div className="container">
                <p className="All_Headings">User Information</p>
                    <div className="row">
                       <div className="col-8 mx-auto">
                               <form onSubmit={handleSubmit(handleFormData)}>
                                   <div className="d-flex justify-content-between ">
                                   <div className="form-group">
                                    <label >UserName</label>
                                    <input {...register("username")}
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Email Address</label>
                                    <input {...register("email")}
                                     type="text"
                                     className="form-control"
                                     />
                                 </div>
                                 </div>
                             
                            
                                <div className="d-flex justify-content-between ">
                                <div className="form-group">
                                  <label>Company Name</label>
                                  <input {...register("companyName")}
                                   type="text"
                                   className="form-control"
                                  />
                              </div>
                           
                             <div className="form-group">
                               <label>Mobile Number</label>
                               <input {...register("mobileNumber")}
                                type="text"
                                className="form-control"
                               />
                           </div>
                           </div>
                           <button className="downloadReport" >Show Report</button> 
                        
                     </form>
                     </div>
                    </div>
          </div>          
    )
}

export default UserDetails;
