// import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  
  return (
    <div className="container-1">
      <div className="navbar">
        <img src="/myflocklogo-removebg-preview 1.png" alt="" />

        <Link className="link12" to="/dashboard/:email/Home"><button className="link">Home</button></Link>

        <Link className="link12" to="/dashboard/:email/Profile"><button className="link">Profile</button></Link>

        <Link className="link12" to="/dashboard/:email/processSetup"><button className="link">Process Setup</button></Link>

        <Link className="link12" to="/dashboard/:email/UserDashboard"><div className="link">Dashboard</div></Link>

      </div>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;