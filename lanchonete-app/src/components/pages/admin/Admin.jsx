import React from "react";

import LoginAdmin from "./LoginAdmin";
import LogoutAdmin from "./LogoutAdmin";

function Admin() {
  const adm = localStorage.getItem('admin');

  return (
    <div className="p-6">
      
      {adm ? <LogoutAdmin /> : <LoginAdmin />}

    </div>
  )
}

export default Admin;