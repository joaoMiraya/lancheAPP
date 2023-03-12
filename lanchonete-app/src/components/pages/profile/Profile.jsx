import React from "react";
import { Outlet } from "react-router-dom";

import SlideCalab from "../../componentsReut/SlideCalab";
import SlideItem from "../../componentsReut/slideItem";

function Profile() {



    return (
<>

        <div className="container flex justify-center items-center mt-20">
            
            
            <Outlet></Outlet>
            <SlideCalab />

        </div>



        </>
    )
};


export default Profile;