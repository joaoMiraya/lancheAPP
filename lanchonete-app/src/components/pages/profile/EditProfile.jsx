import React from "react";
import { Outlet } from "react-router-dom";



function EditProfile() {

    return (
       <>
       
        <Outlet></Outlet>
     <div className="text-center bg-orange-400">
        <h1>Edit Profile</h1>

     </div>

 </>
    )
};


export default EditProfile;