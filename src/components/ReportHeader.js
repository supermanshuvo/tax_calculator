import React from 'react'

function ReportHeader({userInfo}) {
    return (
        <div className="container">
            <h2 className="text center report_header" >Tax Calculation Report 2020-2021</h2>
            <div className="row">
               <div className="col-12">
                   <div className="table-responsive">
                        <table className="table table-hover table-bordered border-dark ">
                           

                            <tbody>
                                
                                <tr>
                                    <td>
                                       Name : {userInfo.username}
                                    </td>
                                    <td>
                                       Email : {userInfo.email}
                                    </td>  
                                </tr>
                                 <tr>
                                    <td>
                                        Company Name : {userInfo.companyName}
                                    </td>
                                    <td>
                                    Mobile No : {userInfo.mobileNumber}
                                    </td>  
                                </tr>

                            </tbody>
                        </table>
                    </div>
                                
               </div>
            </div>
        </div>
    )
}

export default ReportHeader;