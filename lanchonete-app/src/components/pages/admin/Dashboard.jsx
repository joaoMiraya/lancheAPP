import React from "react";

import NavAdmin from "./NavAdmin";
import LancheDash from "./lanchesDash/LancheDash";
import AddLanche from "./lanchesDash/AddLanche";

function Dashboard() {
    return (
        <>
            <NavAdmin />
            <div>
                <LancheDash />
            </div>
        </>
    )
}

export default Dashboard;